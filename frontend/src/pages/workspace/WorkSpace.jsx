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
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("kinetic-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("kinetic-user", JSON.stringify(currentUser));
      return;
    }

    localStorage.removeItem("kinetic-user");
  }, [currentUser]);

  function handleLogout() {
    setCurrentUser(null);
    setPrompt("");
  }

  if (!currentUser) {
    return (
      <div className="kinetic-page min-h-screen bg-[linear-gradient(140deg,#040404_0%,#111827_50%,#030303_100%)] px-5 py-6 text-white sm:px-8">
        <div className="kinetic-ambient-grid" />
        <div className="kinetic-ambient-scan" />
        <div className="kinetic-ambient-beam" />
        <div className="kinetic-page-shell mx-auto flex w-full max-w-6xl flex-col gap-8">
          <header
            className="kinetic-reveal kinetic-panel flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-end lg:justify-between"
            style={{ "--delay": "100ms" }}
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-200/85">Workspace</p>
              <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
                Access required
              </h1>
              <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
                The workspace is now separate from the login page. Authenticate first, then return here.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="kinetic-button inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Back To Landing
              </Link>
              <Link
                to="/login"
                className="kinetic-button inline-flex items-center justify-center rounded-full bg-yellow-300 px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:bg-yellow-200"
              >
                Open Login
              </Link>
            </div>
          </header>

          <section className="kinetic-reveal kinetic-divider kinetic-panel rounded-[2rem] border border-dashed border-white/15 bg-black/30 p-6" style={{ "--delay": "220ms" }}>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Before entry</p>
            <div className="mt-5 kinetic-marquee">
              <div className="kinetic-marquee-track">
                {[...workspaceMotionSignals, ...workspaceMotionSignals].map((signal, index) => (
                  <span key={`${signal}-${index}`} className="kinetic-marquee-item">
                    <span className="kinetic-live-dot" />
                    {signal}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {workspaceHighlights.map((item) => (
                <div key={item.title} className="kinetic-card rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="kinetic-page min-h-screen bg-[linear-gradient(140deg,#040404_0%,#111827_50%,#030303_100%)] px-5 py-6 text-white sm:px-8">
      <div className="kinetic-ambient-grid" />
      <div className="kinetic-ambient-scan" />
      <div className="kinetic-ambient-beam" />
      <div className="kinetic-page-shell mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header
          className="kinetic-reveal kinetic-panel flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-end lg:justify-between"
          style={{ "--delay": "100ms" }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-200/85">Workspace</p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              Make your prompt alive
            </h1>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              You are inside the workspace now. The auth UI lives on its own route, and this area stays focused on the
              prompt flow that comes after access.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="kinetic-button inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Back To Landing
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="kinetic-button inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section
            className="kinetic-reveal kinetic-divider kinetic-panel rounded-[2rem] border border-yellow-300/20 bg-black/45 p-6"
            style={{ "--delay": "220ms" }}
          >
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">
              <span className="kinetic-live-dot" />
              Signed in
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">{currentUser.username}</h2>
            <p className="mt-2 text-sm text-white/60">{currentUser.email}</p>

            <div className="mt-6 kinetic-marquee">
              <div className="kinetic-marquee-track">
                {[...workspaceMotionSignals, ...workspaceMotionSignals].map((signal, index) => (
                  <span key={`${signal}-${index}`} className="kinetic-marquee-item">
                    <span className="kinetic-live-dot" />
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {workspaceHighlights.map((item) => (
                <div key={item.title} className="kinetic-card rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="kinetic-reveal kinetic-divider kinetic-panel flex flex-col rounded-[2rem] border border-white/10 bg-black/45 p-6"
            style={{ "--delay": "320ms" }}
          >
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                <span className="kinetic-live-dot" />
                Prompt draft
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.04em]">Next backend feature slot</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                The prompt composer is still a frontend placeholder, but it now sits in the workspace only after a
                successful login.
              </p>
            </div>

            <div className="mt-6 flex flex-1 flex-col gap-4">
              <textarea
                name="prompt"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                rows={10}
                className="kinetic-input min-h-56 flex-1 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition focus:border-yellow-300/60"
                placeholder="Describe the product flow you want Kinetic to generate next."
              />

              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Prompt tools can be wired here once backend generation routes exist.
                </p>
                <button
                  type="button"
                  className="kinetic-button rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-yellow-200"
                >
                  Send
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default WorkSpace;
