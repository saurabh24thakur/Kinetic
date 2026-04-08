import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/useAuth.js";
import { generateCode } from "../../lib/api.js";

const WorkSpace = () => {
  const { user: currentUser, isLoading: isAuthLoading } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [generationError, setGenerationError] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', content: '[10:24:02] Starting compilation...' },
    { type: 'system', content: '[10:24:05] Finished compilation in 3402ms' },
    { type: 'link', content: 'Server running at http://localhost:3000', url: 'http://localhost:3000' }
  ]);

  const chatEndRef = useRef(null);
  
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [isLoading]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setGenerationError("");
    
    try {
      const response = await generateCode({ prompt });
      
      if (response.success) {
        setGeneratedCode(response.generatedCode);
        setTerminalOutput(prev => [
          ...prev, 
          { type: 'command', content: `Applying neural patch: ${prompt.slice(0, 30)}...` },
          { type: 'system', content: '[SYSTEM] Synthesis complete. Hot reload active.' }
        ]);
        setPrompt("");
      } else {
        setGenerationError(response.message || "Generation failed.");
      }
    } catch (error) {
      setGenerationError(error.message || "Engine connection failure.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#121415] text-[10px] font-bold uppercase tracking-[0.4em] text-[#C0C6D5]">
        Initializing_Neural_Link...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#121415] text-[#E2E2E3] font-body overflow-hidden">
      {/* TopNavBar (The Monolithic Anchor) */}
      <header className="flex justify-between items-center px-4 w-full h-10 bg-[#121415] border-b border-white/5 z-50">
        <div className="flex items-center gap-6">
          <span className="text-sm font-black text-[#E2E2E3] tracking-tighter uppercase">Obsidian AI</span>
          <nav className="hidden md:flex gap-4">
            {['File', 'Edit', 'Selection', 'View', 'Go'].map((item, idx) => (
              <button key={item} className={`text-xs uppercase tracking-widest transition-colors ${idx === 0 ? 'text-[#3291ff] font-bold' : 'text-[#C0C6D5] hover:bg-[#282A2B] px-1'}`}>
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#1a1c1d] px-3 py-1 rounded-lg flex items-center gap-2 border border-white/5">
            <span className="material-symbols-outlined text-[#c0c6d5] scale-75">search</span>
            <span className="text-[10px] text-[#c0c6d5] font-mono">CMD + P</span>
          </div>
          <div className="flex items-center ml-4 gap-3">
            <span className="material-symbols-outlined text-[#C0C6D5] cursor-pointer hover:bg-[#282A2B] p-1">splitscreen</span>
            <span className="material-symbols-outlined text-[#C0C6D5] cursor-pointer hover:bg-[#282A2B] p-1">dock_to_right</span>
            <span className="material-symbols-outlined text-[#C0C6D5] cursor-pointer hover:bg-[#282A2B] p-1">close</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* SideNavBar (The Rail) */}
        <aside className="w-16 flex flex-col items-center py-4 bg-[#0C0E0F] border-r border-white/5">
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="w-full flex justify-center py-2 text-[#3291ff] border-l-2 border-[#3291ff] bg-[#282A2B]/10">
              <span className="material-symbols-outlined">folder_open</span>
            </div>
            {['search', 'account_tree', 'extension'].map(icon => (
              <div key={icon} className="w-full flex justify-center py-2 text-[#C0C6D5] opacity-60 hover:bg-[#282A2B] hover:text-[#E2E2E3] transition-all cursor-pointer">
                <span className="material-symbols-outlined">{icon}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-6 items-center w-full pb-4">
            <div className="w-full flex justify-center py-2 text-[#C0C6D5] opacity-60 hover:bg-[#282A2B] cursor-pointer">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div className="w-full flex justify-center py-2 text-[#C0C6D5] opacity-60 hover:bg-[#282A2B] cursor-pointer">
              <span className="material-symbols-outlined">settings</span>
            </div>
          </div>
        </aside>

        {/* Main Workspace Layout */}
        <main className="flex flex-1 overflow-hidden">
          {/* File Explorer Sidebar */}
          <section className="w-64 bg-[#0c0e0f] border-r border-white/5 flex flex-col">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#c0c6d5]">Explorer</h2>
              <span className="material-symbols-outlined text-[#c0c6d5] scale-75 cursor-pointer">more_horiz</span>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="px-2">
                <div className="flex items-center gap-2 py-1 px-2 text-[#e2e2e3] hover:bg-[#282a2b] cursor-pointer rounded">
                  <span className="material-symbols-outlined text-xs">expand_more</span>
                  <span className="text-xs font-semibold">KINETIC-PROJECT</span>
                </div>
                <div className="ml-4 mt-1 border-l border-white/5">
                  <div className="flex items-center gap-2 py-1 px-4 text-[#c0c6d5] hover:bg-[#282a2b] cursor-pointer transition-colors group">
                    <span className="material-symbols-outlined text-xs text-[#a7c8ff]">folder</span>
                    <span className="text-xs">src</span>
                  </div>
                  <div className="ml-4">
                    <div className={`flex items-center gap-2 py-1 px-4 text-[#e2e2e3] hover:bg-[#282a2b] cursor-pointer relative ${generatedCode ? 'bg-[#282a2b]' : ''}`}>
                      {generatedCode && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3291ff]"></div>}
                      <span className="material-symbols-outlined text-xs text-[#3291ff]">description</span>
                      <span className="text-xs font-medium">App.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 py-1 px-4 text-[#c0c6d5] hover:bg-[#282a2b] cursor-pointer">
                      <span className="material-symbols-outlined text-xs">description</span>
                      <span className="text-xs">Layout.css</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-1 px-4 text-[#c0c6d5] hover:bg-[#282a2b] cursor-pointer">
                    <span className="material-symbols-outlined text-xs text-[#e07302]">description</span>
                    <span className="text-xs">package.json</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Editor Center */}
          <section className="flex-1 flex flex-col bg-[#121415] overflow-hidden">
            {/* Tabs */}
            <div className="flex bg-[#0c0e0f] h-9">
              <div className="flex items-center px-4 gap-2 bg-[#121415] text-[#e2e2e3] border-t-2 border-[#3291ff] text-xs cursor-pointer min-w-[140px]">
                <span className="material-symbols-outlined text-[14px] text-[#3291ff]">description</span>
                <span>App.tsx</span>
                <span className="material-symbols-outlined text-[14px] ml-auto hover:bg-white/10 rounded">close</span>
              </div>
            </div>

            {/* Editor Surface */}
            <div className="flex-1 flex flex-col relative overflow-hidden font-mono text-[13px] leading-relaxed">
              <div className="flex-1 overflow-auto custom-scrollbar flex p-4 bg-[#121415]">
                {/* Line Numbers */}
                <div className="w-10 text-right pr-4 text-[#414753] select-none opacity-50">
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                {/* Code Area */}
                <div className="flex-1 whitespace-pre">
                  {generatedCode ? (
                    <div className="text-[#a7c8ff]">
                      {generatedCode.split('\n').map((line, i) => (
                        <div key={i} className="hover:bg-white/5 px-1">{line || ' '}</div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <span className="syntax-keyword">import</span> React <span className="syntax-keyword">from</span> <span className="syntax-string">'react'</span>;
                      <br />
                      <br />
                      <span className="syntax-comment">// Kinetic neural engine waiting for synthesis...</span>
                      <br />
                      <span className="syntax-keyword">export const</span> <span className="syntax-function">App</span> = () <span className="syntax-keyword">=&gt;</span> &#123;
                      <br />
                      {'  '}<span class="syntax-keyword">return</span> (
                      <br />
                      {'    '}<span class="syntax-variable">&lt;div&gt;</span>Initialize via Assistant on the right<span class="syntax-variable">&lt;/div&gt;</span>
                      <br />
                      {'  '});
                      <br />
                      &#125;;
                    </div>
                  )}
                </div>
              </div>

              {/* Integrated Terminal (Submerged Layer) */}
              <div className="h-48 bg-[#0c0e0f] border-t border-white/5 flex flex-col">
                <div className="flex items-center gap-6 px-4 h-8 bg-[#1a1c1d] border-b border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3291ff] border-b-2 border-[#3291ff] h-full flex items-center">Terminal</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0c6d5] cursor-pointer">Debug Console</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c0c6d5] cursor-pointer">Output</span>
                </div>
                <div className="flex-1 p-4 font-mono text-xs overflow-y-auto custom-scrollbar">
                  <div className="flex gap-2 text-[#c0c6d5]">
                    <span className="text-[#3291ff]">➜</span>
                    <span className="text-[#9ece6a]">kinetic-project</span>
                    <span className="text-[#e2e2e3]">git:(</span><span className="text-[#ffb4ab]">main</span><span className="text-[#e2e2e3]">)</span>
                    <span className="text-[#e2e2e3]">npm start</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {terminalOutput.map((line, idx) => (
                      <div key={idx} className={line.type === 'link' ? 'text-[#3291ff] underline cursor-pointer' : 'text-[#c0c6d5]'}>
                        {line.content}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[#3291ff]">➜</span>
                    <span className="w-1.5 h-4 bg-[#3291ff] animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Chat Sidebar (The Oracle) */}
          <section className="w-80 bg-[#1a1c1d] border-l border-white/5 flex flex-col relative">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#0c0e0f]/50 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3291ff] animate-pulse">auto_awesome</span>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#e2e2e3]">Neural Assistant</span>
              </div>
              <span className="material-symbols-outlined text-[#c0c6d5] scale-75 cursor-pointer hover:text-white">close</span>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[9px] text-[#c0c6d5] font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">account_circle</span>
                    {currentUser?.username || 'User'}
                  </div>
                  <div className="bg-[#1e2021] p-3 rounded-lg text-xs leading-relaxed border border-white/5 text-[#c0c6d5]">
                    Describe the component architecture you wish to synthesize. 
                    I can generate full-stack prototypes from natural language.
                  </div>
                </div>

                {isLoading && (
                  <div className="space-y-2 animate-pulse">
                    <div className="flex items-center gap-2 text-[9px] text-[#3291ff] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-xs">auto_awesome</span>
                      Kinetic AI
                    </div>
                    <div className="bg-[#282a2b] p-3 rounded-lg text-xs leading-relaxed border border-[#3291ff]/20 text-[#a7c8ff]">
                      Synthesizing neural pathways...
                    </div>
                  </div>
                )}

                {generationError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] uppercase font-bold tracking-widest">
                    SYSTEM_ERROR: {generationError}
                  </div>
                )}
              </div>
              <div ref={chatEndRef} />
            </div>

            {/* AI Input */}
            <div className="p-4 bg-[#0c0e0f] border-t border-white/5">
              <div className="relative group">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isLoading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                  className="w-full bg-[#1e2021] p-3 pr-10 rounded-xl text-xs border border-transparent focus:border-[#3291ff]/40 shadow-inner outline-none resize-none min-h-[100px] transition-all text-[#e2e2e3] placeholder:text-white/10" 
                  placeholder="Ask AI to build something..."
                />
                <button 
                  onClick={handleGenerate}
                  disabled={isLoading || !prompt.trim()}
                  className="absolute bottom-3 right-3 p-1.5 bg-[#3291ff] rounded-lg text-white shadow-lg hover:bg-[#a7c8ff] transition-all disabled:opacity-20 active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
              <div className="flex justify-between mt-2 px-1">
                <span className="text-[9px] text-[#c0c6d5] flex items-center gap-1 uppercase tracking-tighter opacity-40">
                  <span className="material-symbols-outlined text-[10px]">bolt</span>
                  Pro_Engine_v2
                </span>
                <span className="text-[9px] text-[#c0c6d5] uppercase tracking-tighter opacity-40">
                  Secure_Session
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer (The Submerged Layer) */}
      <footer className="w-full flex justify-between items-center px-3 border-t border-white/5 z-50 bg-[#0C0E0F] h-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-[#2E90FF]/20 px-2 h-full cursor-pointer hover:bg-[#2E90FF]/30 transition-colors">
            <span className="material-symbols-outlined text-[10px] text-[#2E90FF]">account_tree</span>
            <span className="font-mono text-[10px] uppercase text-[#E2E2E3]">main*</span>
          </div>
          <div className="flex items-center gap-4 ml-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[10px] text-[#ffb4ab]">error</span>
              <span className="font-mono text-[10px] uppercase text-[#c0c6d5]">0</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[10px] text-[#ffb785]">warning</span>
              <span className="font-mono text-[10px] uppercase text-[#c0c6d5]">2</span>
            </div>
          </div>
        </div>
        <div className="flex items-center h-full font-mono text-[10px] uppercase text-[#c0c6d5]">
          <div className="px-3 hover:bg-[#282a2b] h-full flex items-center cursor-pointer">
            UTF-8
          </div>
          <div className="px-3 hover:bg-[#282a2b] h-full flex items-center cursor-pointer">
            TypeScript JSX
          </div>
          <div className="px-3 bg-[#3291ff]/10 h-full flex items-center cursor-pointer border-l border-white/5 text-[#3291ff]">
            v1.0.0-stable
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkSpace;
