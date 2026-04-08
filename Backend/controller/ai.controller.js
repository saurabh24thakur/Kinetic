const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateCode = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        success: false, 
        message: "AI configuration error: GEMINI_API_KEY is missing" 
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `You are Kinetic AI, a premium code generation engine. 
    Your goal is to generate high-quality, modern, and functional web components or full-page code based on the user's prompt.
    User's prompt: "${prompt}"
    Please provide the code in a structured format, preferably as a complete React component if applicable, or as standard HTML/CSS/JS if it's more general.
    Return ONLY the code block without any additional conversational text.`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ 
      success: true, 
      generatedCode: text,
      message: "Code generated successfully"
    });

  } catch (error) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to generate code", 
      error: error.message 
    });
  }
};

module.exports = { generateCode };
