import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCode, MessageSquare, Terminal, ChevronRight, Play, Share2 } from 'lucide-react';

const Workspace = () => {
  const [activeTab, setActiveTab ] = useState('editor');

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-black overflow-hidden">
      {/* Workspace Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-zinc-950/50">
        <div className="flex items-center gap-6">
           <div className="flex flex-col leading-none">
              <h2 className="text-xs font-black text-white uppercase tracking-widest leading-none">Project_Alpha</h2>
              <span className="text-[9px] text-zinc-600 font-mono mt-1 underline">src/main.jsx</span>
           </div>
           <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded bg-pink-500/10 text-[9px] font-black text-pink-500 uppercase tracking-widest border border-pink-500/20">Active</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-black text-zinc-500 uppercase tracking-widest border border-white/5 italic">Sync_OK</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <button className="p-2 text-zinc-500 hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
           <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-pink-400">
              <Play className="w-3 h-3 fill-current" /> Deploy
           </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left: Explorer */}
        <div className="w-64 border-r border-white/5 flex flex-col bg-zinc-950/30">
           <div className="p-4 border-b border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Explorer_</p>
           </div>
           <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {['App.jsx', 'index.css', 'main.jsx', 'components/'].map((item) => (
                <div key={item} className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group">
                   {item.endsWith('/') ? <ChevronRight className="w-3 h-3 text-zinc-700" /> : <FileCode className="w-3 h-3 text-pink-500/60" />}
                   <span className="text-[11px] font-medium text-zinc-400 group-hover:text-white tracking-tight">{item}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Center: Editor Canvas */}
        <div className="flex-1 flex flex-col relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,102,204,0.03),transparent_50%)] pointer-events-none" />
           <div className="flex-1 p-12 overflow-y-auto font-mono text-sm no-scrollbar text-zinc-400">
              <div className="max-w-3xl mx-auto space-y-4">
                 <div className="space-y-1">
                    <p><span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> 'react';</p>
                    <p><span className="text-pink-500">import</span> &#123; motion &#125; <span className="text-pink-500">from</span> 'framer-motion';</p>
                 </div>
                 <div className="pt-4">
                    <p className="text-zinc-600 italic">// Kinetic Neural Synthesis Result</p>
                    <p><span className="text-pink-500 font-bold italic">const</span> <span className="text-white font-black">Monolith</span> = () =&gt; &#123;</p>
                    <p className="ml-4"><span className="text-pink-500">return</span> (</p>
                    <div className="ml-8 bg-zinc-900/50 border-l-2 border-pink-500 px-4 py-2 my-2 text-white">
                       <p>&lt;div className="kinetic-core scale-150"&gt;</p>
                       <p className="ml-4">&lt;NeuralGrid /&gt;</p>
                       <p>&lt;/div&gt;</p>
                    </div>
                    <p className="ml-4">);</p>
                    <p>&#125;;</p>
                 </div>
              </div>
           </div>
           
           {/* Terminal Area */}
           <div className="h-48 border-t border-white/5 bg-black p-6">
              <div className="flex items-center gap-2 mb-4">
                 <Terminal className="w-3 h-3 text-zinc-500" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">System_Output</span>
              </div>
              <p className="text-[11px] font-mono text-pink-500/60 leading-relaxed uppercase tracking-tighter">
                &gt; Synthesis_Protocol initialized... <br />
                &gt; Context_Weights verified (84%)... <br />
                &gt; Segment_Alpha manifest success. Ready for deployment.
              </p>
           </div>
        </div>

        {/* Right: AI Assistant */}
        <div className="w-80 border-l border-white/5 flex flex-col bg-zinc-950/30">
           <div className="p-4 border-b border-white/5 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-pink-500" />
              <h3 className="text-xs font-black uppercase tracking-widest text-white">NEURAL_ASSISTANT</h3>
           </div>
           <div className="flex-1 p-6 space-y-6">
              <div className="p-4 rounded-xl bg-pink-500/5 border border-pink-500/10 space-y-2">
                 <p className="text-[9px] font-black uppercase tracking-widest text-pink-500">Analysis</p>
                 <p className="text-[11px] text-zinc-400 leading-relaxed leading-6 font-medium">
                   "Your architectural vision uses a high degree of tonal monochromatism. Consider adding a pink highlight segment for better visual rhythm."
                 </p>
              </div>
           </div>
           <div className="p-4 border-t border-white/5">
              <div className="relative">
                 <input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs focus:border-pink-500 outline-none pr-10" placeholder="Instruct agent..." />
                 <ChevronRight className="absolute right-3 top-3 w-4 h-4 text-zinc-600" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
