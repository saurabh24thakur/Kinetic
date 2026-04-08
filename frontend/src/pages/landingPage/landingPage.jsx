import { Link } from "react-router";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image2.png";
import { useAuth } from "../../context/AuthContext.jsx";

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

const motionSignals = [
  "Auth-first flow",
  "Backend-aware entry",
  "Prompt workspace",
  "Live route structure",
  "Product motion system",
];

const faqs = [
  {
    question: "What works right now?",
    answer: "The build supports backend-connected auth and a workspace shell for prompt drafting.",
  },
];

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <>
      <main className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end xl:gap-16">
        <section className="space-y-6 pt-2 sm:pt-4">
          <div className="space-y-2">
            <h1
              className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]"
              style={{ "--delay": "190ms" }}
            >
              Create
            </h1>
            <h1
              className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white/20 line-through sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]"
              style={{ "--delay": "260ms" }}
            >
              a prototype
            </h1>
            <h1
              className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white/20 line-through sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]"
              style={{ "--delay": "260ms" }}
            >
              that look
            </h1>
            <h1
              className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white/20 line-through sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]"
              style={{ "--delay": "260ms" }}
            >
              & feel like 
            </h1>
            <h1
              className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem] xl:text-[8rem]"
              style={{ "--delay": "330ms" }}
            >
              real app
            </h1>
          </div>

          <div className="kinetic-reveal max-w-3xl space-y-4 text-base text-white/75 sm:text-lg" style={{ "--delay": "390ms" }}>
            <p>
              Kinetic is an AI-assisted full stack prototype builder for turning rough ideas into usable product flows.
            </p>
          </div>

          <div className="kinetic-reveal flex flex-col gap-3 sm:flex-row" style={{ "--delay": "450ms" }}>
            <Link
              to={user ? "/workspace" : "/login"}
              className="kinetic-button inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-black uppercase tracking-[0.24em] text-black transition hover:bg-yellow-200"
            >
              {user ? "Enter Workspace" : "Open Login"}
            </Link>
            <a
              href="#flow"
              className="kinetic-button inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              See Workflow
            </a>
          </div>

          <div className="kinetic-reveal kinetic-marquee" style={{ "--delay": "520ms" }}>
            <div className="kinetic-marquee-track">
              {[...motionSignals, ...motionSignals].map((signal, index) => (
                <span key={`${signal}-${index}`} className="kinetic-marquee-item">
                  <span className="kinetic-live-dot" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section
        id="about"
        className="kinetic-reveal bg-white flex-col text-black kinetic-divider grid gap-10 border-t rounded-4xl p-4 pb-4 border-white/10 pt-12 lg:grid-cols-[1fr_1.1fr] lg:pt-16 xl:gap-14"
        style={{ "--delay": "520ms" }}
      >
        <div>
          <p className="text-xl font-bold uppercase tracking-[0.28em] text-black">How Kinetic Works?</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-[3.4rem]">
            Kinetic moves from authentication into a workspace where product ideas can turn into usable flows.
          </h2>
        </div>
      </section>

      <section
        className="flex flex-col pb-12 gap-10 border-t border-white/10 pt-12 bg-white w-screen ml-[-2.5vw] justify-center items-center rounded-4xl"
        style={{ "--delay": "720ms" }}
      >
        <h1 className="text-6xl font-bold text-black hero-text">Wasting time making</h1>
        <h1 className="text-6xl font-bold text-black hero-text">a modern process</h1>
        <h1 className="text-6xl font-bold text-black hero-text">works?</h1>
        <br />
        <div className="p-4 bg-white w-full flex items-center justify-center">
              <img src={img1} alt="" />
        </div>

        <h1 className="text-6xl font-bold text-black hero-text">Kinetic connects you</h1>
        <h1 className="text-6xl font-bold text-black hero-text">directly with the</h1>
        <h1 className="text-6xl font-bold text-black hero-text">medium?</h1>
        <hr className="text-red" />

        <div className="p-4 bg-white w-full flex items-center justify-center gap-[3vh]">
          <div className="r">
            <h1 className="text-6xl font-bold text-black hero-text">Your design is a</h1>
            <h1 className="text-6xl font-bold text-black hero-text">living system</h1>
            <h1 className="text-6xl font-bold text-black hero-text">of the components</h1>
          </div>
          <div className="i">
            <img src={img2} alt="" />
          </div>
        </div>
      </section>

      <section
        id="flow"
        className="kinetic-reveal kinetic-divider grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16 xl:grid-cols-[1.15fr_0.85fr]"
        style={{ "--delay": "720ms" }}
      >
        <article className="kinetic-panel">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">How it flows</p>
          <div className="mt-6 space-y-6 border-l border-white/10 pl-6 sm:pl-8">
            {workflowSteps.map((step) => (
              <div key={step.id} className="kinetic-card relative">
                <span className="absolute -left-[2.55rem] top-1 sm:-left-[3.05rem]">
                  <span className="kinetic-live-dot" />
                </span>
                <div className="flex items-start gap-4">
                  <span className="kinetic-float-soft rounded-full bg-yellow-300 px-3 py-1 text-xs font-black tracking-[0.2em] text-black">
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

        <article className="kinetic-panel flex flex-col justify-between gap-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Current status</p>
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
    </>
  );
};

export default LandingPage;
