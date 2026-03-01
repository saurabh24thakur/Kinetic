import Navbar from "../../component/Navbar/Navbar";
import { Link } from "react-router";
import Footer from "../../component/footer/Footer";

const featureCards = [
  {
    title: "Auth-ready workspace",
    description: "Frontend now mirrors the backend auth contract instead of showing an isolated static screen.",
  },
  {
    title: "Fast idea capture",
    description: "Move from landing page to prompt workspace without losing context or session state.",
  },
  {
    title: "Built to extend",
    description: "The current UI leaves room for the next backend features without rewriting the shell.",
  },
];

const workflowSteps = [
  {
    id: "01",
    title: "Describe the product",
    description: "Start with a rough idea, feature request, or user problem instead of waiting for a polished spec.",
  },
  {
    id: "02",
    title: "Lock the direction",
    description: "Use Kinetic to convert the idea into a concrete workflow with screens, states, and backend-aware structure.",
  },
  {
    id: "03",
    title: "Push into build mode",
    description: "Once the core flow is stable, extend the workspace into generation, editing, and implementation steps.",
  },
];

const productSignals = [
  "Structured around real frontend and backend boundaries",
  "Designed for iterative prototype building instead of one-shot output",
  "Ready for auth, prompt workflows, and future generation routes",
];

const faqs = [
  {
    question: "What works right now?",
    answer: "The frontend now supports a backend-connected identity flow and a persistent workspace shell for the next feature layer.",
  },
  {
    question: "What comes next?",
    answer: "The obvious next step is wiring the prompt composer to actual generation or project routes once the backend exposes them.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1f2937_0%,#050505_45%,#000000_100%)] text-white">
      <div className="px-5 pb-10 pt-4 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <Navbar />

          <main className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <section className="space-y-6">
              <p className="inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-200">
                Prototype Engine
              </p>

              <div className="space-y-2">
                <h1 className="text-6xl font-black uppercase leading-none tracking-[-0.06em] sm:text-8xl lg:text-[9rem]">
                  Create
                </h1>
                <h1 className="text-6xl font-black uppercase leading-none tracking-[-0.06em] text-white/20 line-through sm:text-8xl lg:text-[9rem]">
                  pretend apps
                </h1>
                <h1 className="text-6xl font-black uppercase leading-none tracking-[-0.06em] sm:text-8xl lg:text-[9rem]">
                  build real flow
                </h1>
              </div>

              <div className="max-w-3xl space-y-4 text-lg text-white/75 sm:text-2xl">
                <p>
                  Kinetic is an AI-assisted full stack prototype builder for turning rough ideas into usable product flows.
                </p>
                <p>
                  The frontend is now aligned to the live backend auth API, so the product starts with a working identity flow instead of placeholder screens.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/workspace"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition hover:bg-yellow-200"
                >
                  Start In Workspace
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  See Frontend Scope
                </a>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-yellow-300/20 bg-black/60 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">
                  Current backend contract
                </p>
                <div className="mt-5 space-y-4 font-mono text-sm text-white/80">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-yellow-200">POST /api/v1/register</p>
                    <p className="mt-2 text-white/60">Creates a user with username, email, and password.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-yellow-200">POST /api/v1/login</p>
                    <p className="mt-2 text-white/60">Logs in with the same exact three fields returned by the backend.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <section id="features" className="grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white/80"
              >
                <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-white">{card.title}</h2>
                <p className="mt-4 leading-7">{card.description}</p>
              </article>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">How it flows</p>
              <div className="mt-6 space-y-5">
                {workflowSteps.map((step) => (
                  <div key={step.id} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-4">
                      <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black tracking-[0.2em] text-black">
                        {step.id}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">{step.title}</h3>
                        <p className="mt-3 leading-7 text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Why this frontend exists</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                Enough product context to feel intentional, not enough bloat to slow down iteration
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">
                The goal here is not a marketing shell. It is a working product surface that explains what Kinetic does,
                what the backend supports today, and where the next implementation layers fit.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {productSignals.map((signal) => (
                  <div key={signal} className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                    <p className="text-sm leading-6 text-white/75">{signal}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">Built for</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Founders</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Move from vague idea to clickable direction before committing to a full implementation cycle.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Developers</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Keep the UI grounded in actual backend routes and real application constraints.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Designers</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Explore flows and states early instead of polishing disconnected mockups.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Small teams</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Share one workspace language across idea generation, prototyping, and implementation planning.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Common questions</p>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <h3 className="text-base font-bold uppercase tracking-[0.14em] text-white">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
