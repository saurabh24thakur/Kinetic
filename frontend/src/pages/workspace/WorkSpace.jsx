import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/useAuth.js";
import { generateCode } from "../../lib/api.js";
import { Button, Badge } from "../../component/UI/index.js";

const WorkSpace = () => {
  const { user: currentUser, isLoading: isAuthLoading } = useAuth();
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

  const chatEndRef = useRef(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setGenerationError("");
    try {
      const response = await generateCode(prompt);
      setGeneratedCode(response);
      setHistory(prev => [{ id: Date.now(), title: prompt.slice(0, 20) + "...", date: "Just now" }, ...prev]);
    } catch (error) {
      setGenerationError(error.message || "Failed to generate code.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0e27]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#0a0e27] p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Access Restricted</h2>
        <p className="text-gray-400 mb-8">Please initialize your session to access the neural workspace.</p>
        <Button variant="primary" onClick={() => window.location.href = "/login"}>Initialize Session</Button>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col bg-[#0a0e27] overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="kinetic-reveal flex items-center justify-between border-b border-cyan-500/10 bg-[#0a0e27]/90 px-6 py-4 backdrop-blur-xl" style={{ "--delay": "80ms" }}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-cyan-400">Kinetic Workspace</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50 pulse"></span>
            <span className="text-xs text-gray-400">Project_Alpha</span>
          </div>
          <div className="h-6 w-px bg-gray-700"></div>
          <div className="flex items-center gap-2">
            {generatedCode && <Badge variant="success">SYNTHESISED</Badge>}
            {isLoading && <Badge variant="warning">PROCESSING</Badge>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">Share</Button>
          <Button variant="primary" size="sm">Deploy</Button>
        </div>
      </div>

      {/* Main Content - Three Panel Layout */}
      <div className="flex flex-1 overflow-hidden gap-4 p-4">
        {/* Left Panel - File Explorer */}
        {showFileExplorer && (
          <div className="kinetic-reveal w-64 flex flex-col rounded-xl bg-[#121425]/60 border border-cyan-500/10 backdrop-blur-sm" style={{ "--delay": "100ms" }}>
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Files</h3>
              <button onClick={() => setShowFileExplorer(false)} className="text-gray-500 hover:text-gray-300">✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-1 no-scrollbar">
              {files.map((file) => (
                <div 
                  key={file.id}
                  className={`flex items-center gap-2 p-2 rounded-lg hover:bg-cyan-500/10 cursor-pointer transition ${file.indent ? 'ml-4' : ''}`}
                >
                  <span className="text-base">{file.icon}</span>
                  <span className="text-xs text-gray-300 font-medium">{file.name}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-cyan-500/20">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xs font-black text-white">
                  {currentUser.username[0].toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">{currentUser.username}</p>
                  <p className="text-[9px] text-cyan-400 font-bold uppercase tracking-widest">System_Admin</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Center Panel - Agents Window / Code Editor */}
        <main className="kinetic-reveal flex-1 flex flex-col rounded-xl border border-cyan-500/20 bg-[#0a0e27]/40 backdrop-blur-sm overflow-hidden" style={{ "--delay": "150ms" }}>
          {/* Editor Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/10 px-6 py-4 bg-[#0a0e27]/60">
            <div className="flex items-center gap-4">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">AGENTS</span>
              <span className="h-1 w-1 rounded-full bg-cyan-400/50"></span>
              <span className="text-xs text-gray-400 font-mono">Code_Synthesis_v2.0</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowFileExplorer(!showFileExplorer)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${showFileExplorer ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400' : 'border-gray-700 text-gray-400'}`}
              >
                FILES
              </button>
              <button 
                onClick={() => setShowChatPanel(!showChatPanel)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${showChatPanel ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400' : 'border-gray-700 text-gray-400'}`}
              >
                CHAT
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 flex flex-col no-scrollbar">
            {!generatedCode ? (
              <div className="flex flex-col items-center justify-center flex-1 space-y-12 max-w-2xl mx-auto w-full">
                <div className="text-center space-y-4">
                  <h2 className="text-5xl font-black text-white tracking-tighter">Initiate _Code</h2>
                  <p className="text-gray-400 text-lg leading-relaxed opacity-60">
                    Describe your architectural intent. The neural engine will construct your high-fidelity monolith.
                  </p>
                </div>

                <div className="w-full relative group">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-transparent opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isLoading}
                    placeholder="E.g., Construct a high-performance landing page with obsidian depth, kinetic animations, and a responsive glassmorphic navbar..."
                    className="relative w-full min-h-[280px] rounded-xl border border-cyan-500/30 bg-[#0a0e27]/80 backdrop-blur-xl p-8 text-white placeholder:text-gray-600 outline-none transition-all focus:border-cyan-500/60 disabled:opacity-50 font-mono text-sm leading-relaxed"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                        handleGenerate();
                      }
                    }}
                  />
                  
                  <div className="absolute bottom-6 right-6 flex items-center gap-4">
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hidden sm:block">CMD + ENTER</span>
                    <Button 
                      variant="primary"
                      disabled={isLoading || !prompt.trim()}
                      onClick={handleGenerate}
                    >
                      {isLoading ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
                      ) : (
                        "Synthesize"
                      )}
                    </Button>
                  </div>
                </div>

                {generationError && (
                  <div className="w-full p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest">
                    ERROR: {generationError}
                  </div>
                )}

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-40 hover:opacity-100 transition-opacity">
                  {[
                    "Neural Dashboard Shell",
                    "Auth Protocol Interface",
                    "Monolith Data Grid",
                    "Kinetic Animation Suite"
                  ].map((text) => (
                    <button 
                      key={text}
                      onClick={() => setPrompt(text)}
                      className="text-left p-4 rounded-lg border border-cyan-500/10 bg-cyan-500/5 hover:bg-cyan-500/10 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 transition"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col space-y-6 w-full h-full reveal">
                <div className="flex items-center justify-between border-b border-cyan-500/10 pb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-2 uppercase">Synthesis_Output</h3>
                    <div className="flex items-center gap-3">
                      <Badge variant="primary">REACT_JS</Badge>
                      <Badge variant="secondary">TAILWIND_V4</Badge>
                    </div>
                  </div>
                  <button 
                    onClick={() => setGeneratedCode("")}
                    className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400/60 hover:text-cyan-400 transition"
                  >
                    Reset_Editor ←
                  </button>
                </div>
                
                <div className="relative flex-1 group rounded-xl border border-cyan-500/20 overflow-hidden bg-[#050510]/80 backdrop-blur-xl shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-8 bg-cyan-500/5 flex items-center px-4 border-b border-white/5">
                     <div className="flex gap-1.5">
                       <div className="h-2 w-2 rounded-full bg-red-500/20" />
                       <div className="h-2 w-2 rounded-full bg-yellow-500/20" />
                       <div className="h-2 w-2 rounded-full bg-green-500/20" />
                     </div>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(generatedCode)}
                    className="absolute top-12 right-6 z-10 px-4 py-2 rounded-lg bg-[#0a0e27] border border-cyan-500/30 text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27] transition-all"
                  >
                    Copy_Source
                  </button>
                  <pre className="h-full w-full p-8 pt-12 overflow-auto text-xs leading-relaxed text-cyan-400/90 font-mono no-scrollbar">
                    <code>{generatedCode}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Right Panel - Chat/Info */}
        {showChatPanel && (
          <div className="kinetic-reveal w-80 flex flex-col rounded-xl bg-[#121425]/60 border border-cyan-500/10 backdrop-blur-sm" style={{ "--delay": "200ms" }}>
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Neural assistant</h3>
              <button onClick={() => setShowChatPanel(false)} className="text-gray-500 hover:text-gray-300">✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Recent_Sessions</p>
                {history.map((item) => (
                  <div key={item.id} className="group cursor-pointer p-4 rounded-xl bg-cyan-500/5 border border-transparent hover:border-cyan-500/20 transition-all">
                    <p className="text-xs font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase truncate">{item.title}</p>
                    <p className="text-[9px] text-gray-600 font-mono">{item.date}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-4">Neural_Tips</p>
                <div className="space-y-3">
                  {[
                    "Define layout constraints early",
                    "Use precise color definitions",
                    "Request semantic structuring",
                    "Specify interaction patterns"
                  ].map(tip => (
                    <div key={tip} className="flex gap-3 items-center">
                       <div className="h-1 w-1 rounded-full bg-purple-400" />
                       <p className="text-[10px] text-gray-500 font-medium uppercase">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-cyan-500/20">
              <Button variant="secondary" className="w-full text-[10px] font-black uppercase tracking-widest">
                Deploy Agent
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkSpace;
