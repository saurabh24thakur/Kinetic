import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/useAuth.js";
import { generateCode } from "../../lib/api.js";
import { Button, Badge } from "../../component/UI/index.js";

const WorkSpace = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [generationError, setGenerationError] = useState("");
  const [showFileExplorer, setShowFileExplorer] = useState(true);
  const [showChatPanel, setShowChatPanel] = useState(true);
  const [files, setFiles] = useState([
    { id: 1, name: "App.jsx", type: "file", icon: "📄" },
    { id: 2, name: "components", type: "folder", icon: "📁", expanded: true },
    { id: 3, name: "Button.jsx", type: "file", icon: "📄", indent: 1 },
    { id: 4, name: "Card.jsx", type: "file", icon: "📄", indent: 1 },
    { id: 5, name: "hooks", type: "folder", icon: "📁" },
  ]);
  const [history, setHistory] = useState([
    { id: 1, title: "Modern Dashboard", date: "2m ago" },
    { id: 2, title: "Auth Flow Refactor", date: "1h ago" },
    { id: 3, title: "Glassmorphism UI Kit", date: "Yesterday" },
  ]);
  const { isLoading: isAuthLoading, user: currentUser } = useAuth();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setGeneratedCode("");
    setGenerationError("");
    
    try {
      const response = await generateCode({ prompt });
      
      if (response.success) {
        setGeneratedCode(response.generatedCode);
        
        const newHistoryItem = {
          id: Date.now(),
          title: prompt.slice(0, 20) + (prompt.length > 20 ? "..." : ""),
          date: "Just now"
        };
        setHistory((currentHistory) => [newHistoryItem, ...currentHistory]);
      } else {
        setGenerationError(response.message || "Generation failed.");
      }
    } catch (error) {
      const quotaMessage = error.status === 429
        ? `${error.message} ${error.details?.error || ""}`.trim()
        : error.message || "Failed to reach generation engine.";
      setGenerationError(quotaMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm uppercase tracking-[0.24em] text-white/40">
        Loading session...
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-8 text-center">
        <div className="kinetic-reveal space-y-4" style={{ "--delay": "100ms" }}>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-300/60">Protected Layer</p>
          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Workspace Locked</h1>
          <p className="mx-auto max-w-md text-sm leading-7 text-white/40">
            You must be authenticated to access the Kinetic generation engine.
          </p>
        </div>
        <Link
          to="/login"
          className="kinetic-reveal kinetic-button rounded-full bg-yellow-300 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-yellow-200"
          style={{ "--delay": "200ms" }}
        >
          Unlock Workspace
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-70px)] flex-col bg-gray-900 overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="kinetic-reveal flex items-center justify-between border-b border-cyan-500/10 bg-gradient-to-b from-gray-900/90 to-gray-900/70 px-6 py-4 backdrop-blur-xl" style={{ "--delay": "80ms" }}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-cyan-400">Kinetic Workspace</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50"></span>
            <span className="text-xs text-gray-400">Untitled Project</span>
          </div>
          <div className="h-6 w-px bg-gray-700"></div>
          <div className="flex items-center gap-2">
            {generatedCode && <Badge variant="success" className="text-xs">Generated</Badge>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-sm font-semibold text-gray-300 hover:border-cyan-500/60 hover:text-cyan-400 transition">
            Share
          </button>
          <button className="px-4 py-2 rounded-lg bg-cyan-500/20 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/30 transition">
            Deploy
          </button>
        </div>
      </div>

      {/* Main Content - Three Panel Layout */}
      <div className="flex flex-1 overflow-hidden gap-4 p-4">
        {/* Left Panel - File Explorer */}
        {showFileExplorer && (
          <div className="kinetic-reveal kinetic-panel w-64 flex flex-col rounded-xl bg-gray-900/60 border-cyan-500/10" style={{ "--delay": "100ms" }}>
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <h3 className="text-sm font-bold text-cyan-400">Files</h3>
              <button 
                onClick={() => setShowFileExplorer(false)}
                className="text-gray-500 hover:text-gray-300 transition"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {files.map((file) => (
                <div 
                  key={file.id}
                  className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer transition ${file.indent ? 'ml-4' : ''}`}
                >
                  <span className="text-base">{file.icon}</span>
                  <span className="text-xs text-gray-300">{file.name}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-cyan-500/20">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500/50 to-purple-500/50 flex items-center justify-center text-xs font-bold text-white">
                  {currentUser.username[0].toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{currentUser.username}</p>
                  <p className="text-[10px] text-gray-400">Builder</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Center Panel - Agents Window / Code Editor */}
        <main className="kinetic-reveal flex-1 flex flex-col rounded-xl border border-cyan-500/20 bg-gray-900/40 backdrop-blur-sm overflow-hidden" style={{ "--delay": "150ms" }}>
          {/* Editor Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/10 px-6 py-4 bg-gray-900/60">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-cyan-400">AGENTS</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400/50"></span>
              <span className="text-xs text-gray-400">Code Generator</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowFileExplorer(!showFileExplorer)}
                className="px-3 py-1.5 rounded-lg border border-gray-700 text-xs font-semibold text-gray-300 hover:border-gray-600 transition"
              >
                Files
              </button>
              <button 
                onClick={() => setShowChatPanel(!showChatPanel)}
                className="px-3 py-1.5 rounded-lg border border-gray-700 text-xs font-semibold text-gray-300 hover:border-gray-600 transition"
              >
                Chat
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col">
            {!generatedCode ? (
              <div className="flex flex-col items-center justify-center flex-1 space-y-8 max-w-2xl mx-auto w-full">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl font-bold text-white">What are we building?</h2>
                  <p className="text-gray-400 text-sm">
                    Describe your interface, component, or feature. Kinetic's AI agents will generate production-ready code.
                  </p>
                </div>

                <div className="w-full relative group">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent opacity-0 blur-lg transition group-focus-within:opacity-100" />
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isLoading}
                    placeholder="E.g., A dark mode dashboard with charts, real-time data updates, and a gradient navbar..."
                    className="relative w-full min-h-[240px] rounded-xl border border-cyan-500/30 bg-gray-900/50 backdrop-blur p-6 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-500/60 focus:bg-gray-900/80 disabled:opacity-50 font-mono text-sm"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                        handleGenerate();
                      }
                    }}
                  />
                  
                  <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    <span className="text-xs text-gray-500 hidden sm:block">⌘ + Enter</span>
                    <Button 
                      variant="primary"
                      size="sm"
                      disabled={isLoading || !prompt.trim()}
                      onClick={handleGenerate}
                    >
                      {isLoading ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
                      ) : (
                        "Generate"
                      )}
                    </Button>
                  </div>
                </div>

                {generationError && (
                  <div className="w-full rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {generationError}
                  </div>
                )}

                {!isLoading && (
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Multi-step form with validation",
                      "Dark mode analytics dashboard",
                      "Product card gallery",
                      "Real-time chat interface"
                    ].map((text) => (
                      <button 
                        key={text}
                        onClick={() => setPrompt(text)}
                        className="text-left p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:bg-gray-800/60 text-xs text-gray-300 hover:text-gray-200 transition"
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-1 flex flex-col space-y-4 w-full h-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Generated Code</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge variant="primary" className="text-xs">React</Badge>
                      <Badge variant="secondary" className="text-xs">Tailwind</Badge>
                    </div>
                  </div>
                  <button 
                    onClick={() => setGeneratedCode("")}
                    className="text-sm font-semibold text-gray-400 hover:text-cyan-400 transition"
                  >
                    Edit →
                  </button>
                </div>
                
                <div className="relative flex-1 group rounded-lg border border-cyan-500/20 overflow-hidden bg-gray-950/60">
                  <button 
                    onClick={() => navigator.clipboard.writeText(generatedCode)}
                    className="absolute top-4 right-4 z-10 px-3 py-2 rounded-lg bg-gray-900/80 backdrop-blur border border-gray-700 text-xs font-semibold text-gray-300 hover:text-cyan-400 transition"
                  >
                    Copy Code
                  </button>
                  <pre className="h-full w-full p-6 overflow-auto text-xs leading-relaxed text-cyan-300 font-mono">
                    <code>{generatedCode}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Right Panel - Chat/Info */}
        {showChatPanel && (
          <div className="kinetic-reveal kinetic-panel w-80 flex flex-col rounded-xl bg-gray-900/60 border-cyan-500/10" style={{ "--delay": "200ms" }}>
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <h3 className="text-sm font-bold text-cyan-400">AI Assistant</h3>
              <button 
                onClick={() => setShowChatPanel(false)}
                className="text-gray-500 hover:text-gray-300 transition"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <p className="text-xs font-semibold text-cyan-400 mb-2">Recent Projects</p>
                {history.slice(0, 3).map((item) => (
                  <div key={item.id} className="mb-2 last:mb-0 cursor-pointer hover:bg-cyan-500/20 p-2 rounded transition">
                    <p className="text-xs text-gray-300">{item.title}</p>
                    <p className="text-[10px] text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <p className="text-xs font-semibold text-purple-400 mb-2">Quick Tips</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Use detailed descriptions for best results</li>
                  <li>• Specify colors, layouts, and features</li>
                  <li>• Request specific tech stacks</li>
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-cyan-500/20">
              <Button variant="secondary" size="sm" className="w-full">
                Create New Agent
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkSpace;
