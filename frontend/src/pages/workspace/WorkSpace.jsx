import { useEffect, useState } from "react";
import { Link } from "react-router";

const workspaceHighlights = [
  {
    title: "Idea intake",
    description: "Capture the raw concept before it gets over-edited into something generic.",
  },
  {
    title: "Flow shaping",
    description: "Turn that concept into screens, states, and a backend-aware interaction model.",
  },
  {
    title: "Delivery path",
    description: "Extend the workspace into generated code, specs, and implementation tasks as routes are added.",
  },
];

const workspaceMotionSignals = [
  "Session active",
  "Prompt drafting",
  "Flow shaping",
  "Generation next",
  "Workspace unlocked",
];

function WorkSpace() {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([
    { id: 1, title: "Modern Dashboard", date: "2m ago" },
    { id: 2, title: "Auth Flow Refactor", date: "1h ago" },
    { id: 3, title: "Glassmorphism UI Kit", date: "Yesterday" },
  ]);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("kinetic-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem("kinetic-user");
      setCurrentUser(savedUser ? JSON.parse(savedUser) : null);
    };
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

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
    <div className="flex h-[calc(100vh-140px)] gap-6 overflow-hidden">
      {/* SIDEBAR - Minimal Project History */}
      <aside className="kinetic-reveal hidden w-64 flex-col border-r border-white/5 pr-6 lg:flex" style={{ "--delay": "100ms" }}>
        <div className="flex items-center justify-between pb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Generation History</p>
          <button className="text-white/40 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
        </div>
        
        <div className="flex-1 space-y-2 overflow-y-auto pr-2">
          {history.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.03]"
            >
              <h4 className="text-[11px] font-bold uppercase tracking-wide text-white/70 group-hover:text-yellow-200 transition">{item.title}</h4>
              <p className="mt-1 text-[9px] text-white/30 uppercase tracking-widest">{item.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-white/5 pt-6">
          <div className="flex items-center gap-3 rounded-2xl bg-white/[0.02] p-3 border border-white/5">
            <div className="h-8 w-8 rounded-full bg-yellow-300 flex items-center justify-center text-[10px] font-black text-black uppercase">
              {currentUser.username[0]}
            </div>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold uppercase text-white">{currentUser.username}</p>
              <p className="truncate text-[9px] text-white/30">Free Tier</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT - Clean Prompt Editor */}
      <main className="kinetic-reveal flex flex-1 flex-col rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl overflow-hidden" style={{ "--delay": "200ms" }}>
        {/* Top Navbar inside content */}
        <div className="flex items-center justify-between border-b border-white/5 px-8 py-4 bg-white/[0.01]">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-yellow-300">Kinetic Shell v.01</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Untitled Project</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60 hover:border-white/30 hover:text-white transition">
              Share
            </button>
            <button className="rounded-full bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/90 hover:bg-white/10 transition">
              Publish
            </button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">What are we building today?</h2>
              <p className="text-sm leading-relaxed text-white/40">
                Describe your interface, logic, or flow. Kinetic will break it down into atomic components 
                and backend-ready schemas.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-r from-yellow-300/0 via-yellow-300/10 to-transparent opacity-0 blur-xl transition group-focus-within:opacity-100" />
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g. A sleek, high-conversion landing page for a SaaS platform with pricing cards and a glassmorphism navbar..."
                className="relative min-h-[300px] w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-lg leading-relaxed text-white placeholder:text-white/10 outline-none transition focus:border-yellow-300/40 focus:bg-white/[0.05]"
              />
              
              <div className="absolute bottom-6 right-6 flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 hidden sm:block">⌘ + Enter to generate</span>
                <button 
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black shadow-lg shadow-yellow-300/20 transition hover:scale-105 hover:bg-yellow-200 active:scale-95"
                  onClick={() => alert("Generation started...")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            {/* Quick Suggestions */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Create a multi-step signup form",
                "Design a dark-mode analytics dashboard",
                "Build a premium product gallery",
                "Schema for a real-time chat app"
              ].map((text) => (
                <button 
                  key={text}
                  onClick={() => setPrompt(text)}
                  className="text-left rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-[11px] font-bold uppercase tracking-wider text-white/30 transition hover:border-white/20 hover:bg-white/5 hover:text-white/70"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WorkSpace;
