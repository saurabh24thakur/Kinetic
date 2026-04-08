const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

const getRequestHeaders = () => {
  const headers = {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
  };

  if (process.env.OPENROUTER_SITE_URL) {
    headers["HTTP-Referer"] = process.env.OPENROUTER_SITE_URL;
  }

  if (process.env.OPENROUTER_APP_NAME) {
    headers["X-OpenRouter-Title"] = process.env.OPENROUTER_APP_NAME;
  }

  return headers;
};

const getRetryAfterSeconds = (response, errorBody) => {
  const retryAfterHeader = response.headers.get("retry-after");
  if (retryAfterHeader) {
    return Number.parseInt(retryAfterHeader, 10) || null;
  }

  const retryMessage = errorBody?.error?.metadata?.raw?.match(/retry in ([0-9.]+)s/i);
  if (!retryMessage?.[1]) {
    return null;
  }

  return Math.ceil(Number.parseFloat(retryMessage[1])) || null;
};

const generateCode = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        message: "AI configuration error: OPENROUTER_API_KEY is missing" 
      });
    }

    const systemPrompt = `You are Kinetic AI, a premium code generation engine. 
    Your goal is to generate high-quality, modern, and functional web components or full-page code based on the user's prompt.
    User's prompt: "${prompt}"
    Please provide the code in a structured format, preferably as a complete React component if applicable, or as standard HTML/CSS/JS if it's more general.
    Return ONLY the code block without any additional conversational text.`;

    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: getRequestHeaders(),
      body: JSON.stringify({
        model: DEFAULT_OPENROUTER_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
      }),
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      const error = new Error(payload?.error?.message || "OpenRouter request failed.");
      error.details = payload;
      error.retryAfterSeconds = getRetryAfterSeconds(response, payload);
      error.status = response.status;
      throw error;
    }

    const text = payload?.choices?.[0]?.message?.content?.trim();
    if (!text) {
      return res.status(502).json({
        success: false,
        message: "OpenRouter returned an empty completion.",
      });
    }

    res.status(200).json({ 
      success: true, 
      generatedCode: text,
      message: "Code generated successfully"
    });

  } catch (error) {
    if (error.status === 404) {
      console.warn(`OpenRouter model unavailable: ${DEFAULT_OPENROUTER_MODEL}`);
      return res.status(502).json({
        success: false,
        message: `Configured OpenRouter model "${DEFAULT_OPENROUTER_MODEL}" is unavailable.`,
        error: "Set OPENROUTER_MODEL to a model slug supported by your OpenRouter account.",
      });
    }

    if (error.status === 429) {
      const retryAfterSeconds = error.retryAfterSeconds || null;
      console.warn(`OpenRouter quota exceeded for ${DEFAULT_OPENROUTER_MODEL}. Retry after ${retryAfterSeconds || "unknown"}s.`);
      return res.status(429).json({
        success: false,
        message: "AI generation quota exceeded for the current OpenRouter account or model.",
        error: retryAfterSeconds
          ? `Retry in about ${retryAfterSeconds} seconds or switch to an OpenRouter key or model with available quota.`
          : "Retry later or switch to an OpenRouter key or model with available quota.",
        retryAfterSeconds,
      });
    }

    if (error.status === 401 || error.status === 403) {
      return res.status(502).json({
        success: false,
        message: "OpenRouter rejected the configured API key.",
        error: "Verify OPENROUTER_API_KEY and account access.",
      });
    }

    if (error.status === 402) {
      return res.status(402).json({
        success: false,
        message: "OpenRouter account has insufficient credits for this request.",
        error: "Add credits or use a cheaper OPENROUTER_MODEL.",
      });
    }

    console.error("OpenRouter Generation Error:", error);

    res.status(500).json({ 
      success: false, 
      message: "Failed to generate code", 
      error: error.message 
    });
  }
};

module.exports = { generateCode };
