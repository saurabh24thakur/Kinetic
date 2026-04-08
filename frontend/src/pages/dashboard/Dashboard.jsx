import { useAuth } from "../../context/useAuth.js";
import { Link } from "react-router";

const Dashboard = () => {
  const { user } = useAuth();

  const projects = [
    { name: "obsidian-ui-framework", path: "~/Documents/GitHub/monolith", time: "2h ago", icon: "folder" },
    { name: "neural-engine-core", path: "~/Projects/AI/engine", time: "Yesterday", icon: "terminal" },
    { name: "rust-compiler-custom", path: "~/Archive/rust-tools", time: "3d ago", icon: "cloud" },
    { name: "cloud-deploy-script", path: "~/Desktop/scripts", time: "1w ago", icon: "folder" },
  ];

  return (
    <div className="min-h-screen bg-[#121415] text-[#E2E2E3] font-body">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden overflow-x-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a7c8ff]/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3291ff]/3 blur-[160px] rounded-full"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-12 gap-12">
          {/* Left: Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            <header className="reveal">
              <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl mb-4">
                The Monolithic <span className="text-[#3291ff]">Interface</span>
              </h1>
              <p className="text-[#C0C6D5] text-lg max-w-xl opacity-60">
                AI-Powered Editor. Your logic, distilled into high-performance architecture.
              </p>
            </header>

            {/* Quick Actions */}
            <section className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ animationDelay: '100ms' }}>
              <Link to="/workspace" className="group p-8 bg-[#1A1C1D] hover:bg-[#282A2B] rounded-xl border border-white/5 hover:border-[#3291ff]/20 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a7c8ff] to-[#3291ff] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#3291ff]/20 group-active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-[#003061]">add_circle</span>
                </div>
                <span className="font-bold">New Project</span>
                <p className="text-[10px] text-[#C0C6D5] opacity-40 uppercase tracking-widest mt-1">Ctrl + N</p>
              </Link>
              
              <button className="group p-8 bg-[#1A1C1D] hover:bg-[#282A2B] rounded-xl border border-white/5 hover:border-[#3291ff]/20 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-[#333536] flex items-center justify-center mx-auto mb-4 group-hover:text-[#3291ff] transition-colors group-active:scale-95">
                  <span className="material-symbols-outlined">folder_open</span>
                </div>
                <span className="font-bold">Open Local</span>
                <p className="text-[10px] text-[#C0C6D5] opacity-40 uppercase tracking-widest mt-1">Ctrl + O</p>
              </button>

              <button className="group p-8 bg-[#1A1C1D] hover:bg-[#282A2B] rounded-xl border border-white/5 hover:border-[#3291ff]/20 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-[#333536] flex items-center justify-center mx-auto mb-4 group-hover:text-[#3291ff] transition-colors group-active:scale-95">
                  <span className="material-symbols-outlined">cloud_download</span>
                </div>
                <span className="font-bold">Clone Repository</span>
                <p className="text-[10px] text-[#C0C6D5] opacity-40 uppercase tracking-widest mt-1">Git, SVN, etc.</p>
              </button>
            </section>

            {/* Recent Projects */}
            <section className="reveal space-y-6" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight">Recent Workspaces</h3>
                <button className="text-[#3291ff] text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-[#1A1C1D] p-5 hover:bg-[#282A2B] flex items-center gap-4 cursor-pointer transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#333536] flex items-center justify-center group-hover:bg-[#3291ff]/10 group-hover:text-[#3291ff] transition-colors">
                      <span className="material-symbols-outlined">{project.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate">{project.name}</h4>
                      <p className="text-[10px] text-[#C0C6D5] opacity-40 truncate font-mono">{project.path}</p>
                    </div>
                    <span className="text-[9px] uppercase font-mono text-[#C0C6D5] opacity-30">{project.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: AI Intelligence */}
          <aside className="col-span-12 lg:col-span-4 reveal" style={{ animationDelay: '300ms' }}>
            <div className="sticky top-24 space-y-8">
              <div className="glass border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="font-bold flex items-center gap-2 text-xs uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[#3291ff] text-base animate-pulse">bolt</span>
                    AI Intelligence
                  </h3>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#3291ff] shadow-[0_0_8px_#3291ff]"></div>
                </div>
                <div className="p-6 space-y-8">
                  {[
                    { title: "Dynamic Context Indexing", desc: "AI now understands project-specific patterns and local dependencies." },
                    { title: "Performance Prototyping", desc: "Refactor logic is now 40% faster at identifying memory bottlenecks." },
                    { title: "Interactive Notebooks", desc: "Execute code snippets directly in the sidebar for rapid validation." }
                  ].map((tip, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-1 h-1 mt-2 rounded-full bg-[#3291ff] flex-shrink-0"></div>
                      <div>
                        <h5 className="text-xs font-bold mb-1">{tip.title}</h5>
                        <p className="text-[11px] text-[#C0C6D5] leading-relaxed opacity-60 font-medium">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full py-2.5 rounded-lg bg-[#282A2B] text-[10px] font-bold uppercase tracking-widest hover:bg-[#333536] transition-colors border border-white/5">
                    Explore Changelog
                  </button>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-gradient-to-br from-[#1A1C1D] to-[#0C0E0F] p-6 rounded-2xl border border-white/5 relative overflow-hidden group shadow-lg">
                <div className="relative z-10 flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                     <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#a7c8ff] to-[#3291ff] flex items-center justify-center text-xs font-black text-[#003061]">
                       {user?.username[0].toUpperCase()}
                     </div>
                     <div>
                       <p className="text-sm font-bold">{user?.username || 'Guest System'}</p>
                       <p className="text-[9px] text-[#3291ff] font-bold uppercase tracking-widest">Administrator_Pro</p>
                     </div>
                   </div>
                   <div className="h-[1px] w-full bg-white/5"></div>
                   <div className="flex justify-between items-center text-[10px] font-mono">
                     <span className="opacity-40 uppercase">System Integrity</span>
                     <span className="text-[#9ece6a]">OPTIMIZED</span>
                   </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">verified_user</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
