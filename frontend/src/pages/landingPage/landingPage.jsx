import { Link } from "react-router";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image2.png";
import { useAuth } from "../../context/useAuth.js";

const workflowSteps = [
  {
    id: "01",
    title: "Project Initiation",
    description: "Register your domain within the Kinetic neural architecture.",
  },
  {
    id: "02",
    title: "Neural Synthesis",
    description: "Interface with the generation engine to construct complex flows.",
  },
  {
    id: "03",
    title: "Deployment",
    description: "Export high-fidelity monoliths ready for deployment.",
  },
];

const productSignals = [
  "Bespoke Monolithic Architecture",
  "Neural-assisted Synthesis",
  "High-Precision Output",
];

const motionSignals = [
  "Neural Synthesis",
  "Obsidian Interface",
  "Digital Monolith",
  "Zen Evolution",
  "Electric Precision",
];

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <main className="reveal grid gap-16 pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <section className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-container-high)] border border-[var(--outline-variant)]">
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--on-surface-variant)] leading-none">Version 2.0_Obsidian</span>
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-[var(--on-surface)] sm:text-8xl xl:text-9xl leading-[0.9]">
              Neural_ <br />
              <span className="text-[var(--primary)]">Architecture</span>
            </h1>
          </div>

          <div className="max-w-xl space-y-8">
            <p className="text-lg leading-relaxed text-[var(--on-surface-variant)] opacity-70">
              Kinetic is a high-performance instrument for turning conceptual logic into 
              sophisticated digital monoliths. Precision by design.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to={user ? "/workspace" : "/login"}
                className="btn-primary px-10 py-4 text-xs font-bold uppercase tracking-[0.2em]"
              >
                {user ? "Enter Neural Shell" : "Initialize Access"}
              </Link>
              <a
                href="#flow"
                className="btn-ghost px-10 py-4 text-xs font-bold uppercase tracking-[0.2em]"
              >
                System Workflow
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-[var(--outline-variant)]">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {motionSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-[var(--primary)] opacity-40" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--on-surface-variant)] opacity-50">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hidden lg:block">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--surface-container-high)] to-transparent border border-[var(--outline-variant)] relative overflow-hidden">
             <div className="absolute inset-0 bg-[var(--primary)] opacity-[0.03] blur-[100px]" />
             <div className="p-12 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-px w-12 bg-[var(--primary)]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--on-surface-variant)]">StructuralIntegrity</p>
                </div>
                <div className="space-y-2 opacity-20">
                   {[1,2,3,4,5,6].map(i => (
                     <div key={i} className="h-2 bg-[var(--on-surface)] rounded-full" style={{ width: `${100 - (i*10)}%` }} />
                   ))}
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="reveal monolith-card p-12 lg:p-24 space-y-12 bg-[var(--surface-container)] border border-[var(--outline-variant)]"
      >
        <div className="max-w-4xl space-y-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">The Instrument</p>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--on-surface)] sm:text-6xl leading-[1.1]">
            We abandon the template. Kinetic treats the UI as a <span className="text-[var(--on-surface-variant)] opacity-40">Zen-state environment.</span>
          </h2>
          <p className="text-lg leading-relaxed text-[var(--on-surface-variant)] opacity-70 max-w-2xl">
            Our design system—Digital Obsidian—prioritizes restraint. We move away from the cluttered density 
            of traditional editors toward Focused Intentionality.
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section
        id="flow"
        className="reveal grid gap-16 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <article className="space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--on-surface-variant)] opacity-40">Synthesis_Flow</p>
            <h3 className="text-3xl font-bold text-[var(--on-surface)] tracking-tight">The Neural Pipeline</h3>
          </div>
          
          <div className="space-y-6">
            {workflowSteps.map((step) => (
              <div key={step.id} className="group flex gap-8 p-8 rounded-xl bg-[var(--surface-container-low)] border border-transparent hover:border-[var(--outline-variant)] transition-all">
                <span className="text-2xl font-black text-[var(--primary)] opacity-20 group-hover:opacity-100 transition-opacity leading-none pt-1">
                  {step.id}
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-[var(--on-surface)] uppercase tracking-wider">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-[var(--on-surface-variant)] opacity-60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="monolith-card p-12 bg-gradient-to-b from-[var(--surface-container-high)] to-[var(--surface-container)] border border-[var(--outline-variant)] flex flex-col justify-center">
           <div className="space-y-12">
              <div className="h-2 w-12 bg-[var(--primary)] shadow-[0_0_12px_var(--primary)]" />
              <h4 className="text-4xl font-bold tracking-tight leading-[1.2]">
                A living system of components, <span className="text-[var(--on-surface-variant)] opacity-40 italic">not just pixels.</span>
              </h4>
              <div className="grid gap-6">
                {productSignals.map((signal) => (
                  <div key={signal} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[var(--on-surface-variant)] opacity-60">
                    <div className="h-[1px] w-4 bg-[var(--outline)]" />
                    {signal}
                  </div>
                ))}
              </div>
           </div>
        </article>
      </section>
    </div>
  );
};

export default LandingPage;
