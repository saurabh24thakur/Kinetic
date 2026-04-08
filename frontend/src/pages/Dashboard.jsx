import { motion } from 'framer-motion';
import { LayoutGrid, Folder, Zap, Cpu } from 'lucide-react';

const Dashboard = () => {
  const projects = [
    { title: "Neural Shell", type: "Synthesis", date: "2h ago" },
    { title: "Obsidian UI", type: "Design", date: "Yesterday" },
    { title: "Kinetic Engine", type: "Core", date: "3d ago" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
           <h1 className="text-5xl font-black text-white leading-none">Dashboard_</h1>
           <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">Mission_Control // User: Saurabh</p>
        </div>
        <button className="btn-pill bg-white text-black border-white">New_Synthesis</button>
      </header>

      {/* Modern Grid of Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Synthesis", val: "08", icon: Zap },
          { label: "Neural Nodes", val: "24", icon: Cpu },
          { label: "System Uptime", val: "99%", icon: LayoutGrid },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-8 flex justify-between items-center group hover:border-pink-500/30 transition-all">
            <div className="space-y-1">
               <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</p>
               <p className="text-4xl font-black text-white">{stat.val}</p>
            </div>
            <stat.icon className="w-8 h-8 text-pink-500 opacity-20 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest">Active_Projects</h3>
           <div className="space-y-4">
              {projects.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 glass-panel hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-black transition-all">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white">{p.title}</h4>
                    <p className="text-xs text-zinc-600 font-mono italic">{p.type} // Segment_0{i+1}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Last_Mod</p>
                    <p className="text-xs font-bold text-white uppercase">{p.date}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        <aside className="glass-panel p-8 space-y-8">
           <div className="flex items-center gap-3 text-pink-500">
              <Zap className="w-4 h-4 animate-pulse" />
              <h3 className="text-xs font-black uppercase tracking-[0.2em]">Neural_Link</h3>
           </div>
           <p className="text-xs text-zinc-500 leading-relaxed font-medium">
             Synthesis speed increased by <span className="text-white">40%</span> using local neural weight caching in Segment_A.
           </p>
           <div className="pt-4 border-t border-white/5">
              <button className="w-full py-3 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
                View System Logs →
              </button>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
