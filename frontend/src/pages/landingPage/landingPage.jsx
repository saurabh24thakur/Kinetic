import Navbar from "../../component/Navbar/Navbar";
import { Link } from "react-router";
import Footer from "../../component/footer/Footer";

const featureCards = [
  {
    title: "Auth-connected entry",
    description: "Users register or log in before entering the workspace.",
  },
  {
    title: "Prompt workspace",
    description: "After authentication, the workspace is ready for prompt drafting.",
  },
  {
    title: "Extendable structure",
    description: "The current build is ready for generation and editing routes.",
  },
];

const workflowSteps = [
  {
    id: "01",
    title: "Create an account",
    description: "Register or log in with the backend fields.",
  },
  {
    id: "02",
    title: "Enter the workspace",
    description: "Authenticated users enter the workspace shell.",
  },
  {
    id: "03",
    title: "Expand the build",
    description: "Next comes generation routes and project output.",
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
    answer: "The build supports backend-connected auth and a workspace shell for prompt drafting.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#243042_0%,#090909_44%,#000000_100%)] text-white">
      <div className="px-5 pb-12 pt-4 sm:px-8 sm:pb-16 xl:px-12">
        <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-14">
          <Navbar />

          <main className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end xl:gap-16">
            <section className="space-y-6 pt-2 sm:pt-4">
              <p className="inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-200">
                Prototype Engine
              </p>

              <div className="space-y-2">
                <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]">
                  Start
                </h1>
                <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white/20 line-through sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]">
                  with auth
                </h1>
                <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]">
                  shape product flow
                </h1>
              </div>

              <div className="max-w-3xl space-y-4 text-base text-white/75 sm:text-lg">
                <p>
                  Kinetic is an AI-assisted full stack prototype builder for turning rough ideas into usable product flows.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/workspace"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-black uppercase tracking-[0.24em] text-black transition hover:bg-yellow-200"
                >
                  Start In Workspace
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  See Frontend Scope
                </a>
              </div>
            </section>

            <section className="border-l border-white/10 pl-6 lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">Current backend contract</p>
              <div className="mt-5 space-y-6 font-mono text-sm text-white/80">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-yellow-200">POST /api/v1/register</p>
                  <p className="mt-3 max-w-md text-base font-sans leading-7 text-white/65">
                    Creates a user with username, email, and password.
                  </p>
                </div>
                <div className="border-b border-white/10 pb-5">
                  <p className="text-yellow-200">POST /api/v1/login</p>
                  <p className="mt-3 max-w-md text-base font-sans leading-7 text-white/65">
                    Logs in with the same exact three fields returned by the backend.
                  </p>
                </div>
                <p className="max-w-sm text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                  The shell stays simple now so the next feature layer has room to land.
                </p>
              </div>
            </section>
          </main>

          <section
            id="about"
            className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1.1fr] lg:pt-16 xl:gap-14"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">How Kinetic Works</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl lg:text-[3.4rem]">
                Kinetic moves from authentication into a workspace where product ideas can turn into usable flows.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/72 sm:text-lg">
              <p>
                The current project starts with a backend-connected identity layer. A user registers or logs in with the
                required fields, enters the app, and then continues inside the workspace for prompt writing and future
                generation flows.
              </p>
            </div>
          </section>

          <section id="features" className="border-t border-white/10 pt-12 lg:pt-16">
            <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] xl:grid-cols-[0.45fr_1.55fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Frontend scope</p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                  Core signals
                </h2>
              </div>

              <div className="grid gap-8 border-t border-white/10 pt-6 md:grid-cols-3 md:border-t-0 md:pt-0">
                {featureCards.map((card) => (
                  <article key={card.title} className="border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
                    <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-white">{card.title}</h3>
                    <p className="mt-4 leading-7 text-white/72">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="flow"
            className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16 xl:grid-cols-[1.15fr_0.85fr]"
          >
            <article>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">How it flows</p>
              <div className="mt-6 space-y-6 border-l border-white/10 pl-6 sm:pl-8">
                {workflowSteps.map((step) => (
                  <div key={step.id} className="relative">
                    <span className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border border-yellow-300 bg-black sm:-left-[3.05rem]" />
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

            <article className="flex flex-col justify-between gap-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">What The Current Build Supports</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                The frontend already matches the backend entry flow and leaves clear space for the generation layer.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
                This is not just a static landing page. It introduces the product, reflects the active backend auth
                routes, and connects that entry flow to the workspace where future generation actions will live.
              </p>

              <div className="grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
                {productSignals.map((signal) => (
                  <p key={signal} className="text-sm leading-7 text-white/75">
                    {signal}
                  </p>
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:pt-16 xl:grid-cols-[1.3fr_0.7fr]">
            <article>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">Built for</p>
              <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
                <div className="border-t border-white/10 pt-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Founders</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Turn a rough product idea into a clearer workflow before committing to a larger build cycle.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Developers</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Keep the interface connected to actual backend routes instead of designing around placeholders.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white">Small teams</h3>
                  <p className="mt-3 leading-7 text-white/70">
                    Share one working surface for login, prompt drafting, and the next implementation steps.
                  </p>
                </div>
              </div>
            </article>

            <article id="faq">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Common questions</p>
              <div className="mt-6 divide-y divide-white/10 border-t border-white/10">
                {faqs.map((faq) => (
                  <div key={faq.question} className="py-5">
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
