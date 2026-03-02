import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser, registerUser } from "../../lib/api";

const emptyForm = {
  username: "",
  email: "",
  password: "",
};

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

const authSignals = [
  {
    value: "01",
    label: "Identity first",
    detail: "The app opens through a backend-connected auth layer before the workspace unlocks.",
  },
  {
    value: "02",
    label: "Exact field contract",
    detail: "Both routes currently rely on the same username, email, and password payload.",
  },
  {
    value: "03",
    label: "Workspace after access",
    detail: "Once a user object returns, the prompt surface becomes the active next step.",
  },
];

const authEndpoints = [
  {
    method: "POST",
    path: "/api/v1/register",
    note: "Creates a user and returns the account shape used by the workspace.",
  },
  {
    method: "POST",
    path: "/api/v1/login",
    note: "Accepts the same fields and unlocks the session panel on success.",
  },
];

const authMotionSignals = [
  "Verify identity",
  "Route auth payload",
  "Unlock workspace",
  "Persist session",
  "Move into flow",
];

const authVisualNodes = [
  "Intake",
  "Validate",
  "Persist",
  "Unlock",
];

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        username: form.username.trim().toLowerCase(),
        email: form.email.trim().toLowerCase(),
        password: form.password.trim().toLowerCase(),
      };

      const action = mode === "register" ? registerUser : loginUser;
      const data = await action(payload);

      if (!data) {
        throw new Error("No user matched those credentials.");
      }

      localStorage.setItem("kinetic-user", JSON.stringify(data));
      setForm(emptyForm);
      setStatus({
        type: "success",
        message:
          mode === "register"
            ? "Account created. Redirecting to workspace."
            : "Login successful. Redirecting to workspace.",
      });

      navigate("/workspace");
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="kinetic-page min-h-screen bg-[radial-gradient(circle_at_top,#243042_0%,#090909_44%,#000000_100%)] text-white">
      <div className="kinetic-ambient-grid" />
      <div className="kinetic-ambient-scan" />
      <div className="kinetic-ambient-beam" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-yellow-300/8 blur-3xl kinetic-float-soft" />
      <div className="pointer-events-none absolute right-[10%] top-[14%] h-52 w-52 rounded-full bg-slate-300/6 blur-3xl kinetic-float-soft" style={{ animationDelay: "700ms" }} />

      <div className="px-6 pb-14 pt-5 sm:px-10 sm:pb-18 xl:px-16">
        <div className="kinetic-page-shell mx-auto flex w-full max-w-[84rem] flex-col gap-16">
          <header
            className="kinetic-reveal flex w-full items-center justify-between gap-4 border-b border-white/10 pb-5"
            style={{ "--delay": "80ms" }}
          >
            <Link to="/" className="kinetic-brand">
              <span className="kinetic-brand-mark text-sm font-black uppercase tracking-[0.16em] text-black">K</span>
              <span className="kinetic-brand-word">
                <span className="text-xl font-black uppercase tracking-[0.22em] text-white sm:text-2xl sm:tracking-[0.25em]">
                  Kinetic
                </span>
                <span className="kinetic-brand-caption">Access Layer</span>
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <p className="hidden text-xs font-bold uppercase tracking-[0.22em] text-white/45 sm:block">
                Auth then workspace
              </p>
              <Link
                to="/"
                className="kinetic-button rounded-full border border-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-white/35 hover:text-white sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.2em]"
              >
                Back To Landing
              </Link>
            </div>
          </header>

          <main className="grid gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-start xl:gap-20">
            <section className="space-y-12 pt-3 sm:pt-5">
              <div className="max-w-[46rem] space-y-7">
                <p
                  className="kinetic-reveal inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-200"
                  style={{ "--delay": "150ms" }}
                >
                  Access Layer
                </p>

                <div className="space-y-3">
                  <h1
                    className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7rem] xl:text-[7.5rem]"
                    style={{ "--delay": "220ms" }}
                  >
                    Enter
                  </h1>
                  <h1
                    className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white/20 sm:text-7xl lg:text-[7rem] xl:text-[7.5rem]"
                    style={{ "--delay": "290ms" }}
                  >
                    with
                  </h1>
                  <h1
                    className="kinetic-title-line text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7rem] xl:text-[7.5rem]"
                    style={{ "--delay": "360ms" }}
                  >
                    real auth
                  </h1>
                </div>

                <div className="kinetic-reveal max-w-3xl space-y-4 text-base text-white/75 sm:text-lg" style={{ "--delay": "430ms" }}>
                  <p>
                    The login page should carry the same presence as the landing page. This version keeps the Kinetic
                    tone and gives the auth flow more breathing room instead of trapping it inside stacked cards.
                  </p>
                </div>

                <div className="kinetic-reveal kinetic-marquee" style={{ "--delay": "500ms" }}>
                  <div className="kinetic-marquee-track">
                    {[...authMotionSignals, ...authMotionSignals].map((signal, index) => (
                      <span key={`${signal}-${index}`} className="kinetic-marquee-item">
                        <span className="kinetic-live-dot" />
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <section
                className="kinetic-reveal kinetic-divider grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.36fr_0.64fr]"
                style={{ "--delay": "520ms" }}
              >
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">Access sequence</p>
                  <h2 className="max-w-md text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                    Three signals define how the page moves into the app.
                  </h2>
                </div>

                <div className="space-y-5 border-l border-white/10 pl-6 lg:pl-8">
                  {authSignals.map((item) => (
                    <article key={item.label} className="kinetic-card kinetic-route-line min-w-0 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <span className="kinetic-float-soft rounded-full bg-yellow-300 px-3 py-1 text-xs font-black tracking-[0.2em] text-black">
                          {item.value}
                        </span>
                        <div className="min-w-0">
                          <h2 className="text-lg font-bold uppercase tracking-[0.16em] text-white">{item.label}</h2>
                          <p className="mt-3 max-w-2xl leading-7 text-white/70">{item.detail}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="kinetic-reveal kinetic-divider grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.7fr_1.3fr]" style={{ "--delay": "620ms" }}>
                <div className="kinetic-panel">
                  <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">
                    <span className="kinetic-live-dot" />
                    Current backend contract
                  </p>
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                    The auth page matches live routes, not placeholders.
                  </h2>
                </div>

                <div className="kinetic-panel space-y-6 border-l border-white/10 pl-6 lg:pl-8">
                  {authEndpoints.map((endpoint) => (
                    <div key={endpoint.path} className="kinetic-card kinetic-route-line border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <p className="font-mono text-sm text-yellow-200">
                        {endpoint.method} {endpoint.path}
                      </p>
                      <p className="mt-3 max-w-xl text-base leading-7 text-white/65">{endpoint.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                className="kinetic-reveal kinetic-divider grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2"
                style={{ "--delay": "720ms" }}
              >
                {workspaceHighlights.map((item, index) => (
                  <article
                    key={item.title}
                    className={`kinetic-card min-w-0 border-t border-white/10 pt-6 md:border-t-0 md:pt-0 ${
                      index === workspaceHighlights.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <h2 className="text-lg font-bold uppercase tracking-[0.16em] text-white">{item.title}</h2>
                    <p className="mt-4 leading-7 text-white/70">{item.description}</p>
                  </article>
                ))}
              </section>
            </section>

            <section
              className="kinetic-reveal kinetic-divider kinetic-panel border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-2"
              style={{ "--delay": "260ms" }}
            >
              <div className="kinetic-reveal mb-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5" style={{ "--delay": "300ms" }}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/45">Protocol map</p>
                  <span className="kinetic-live-dot" />
                </div>

                <div className="mt-6 grid grid-cols-4 gap-3">
                  {authVisualNodes.map((node, index) => (
                    <div key={node} className="relative flex flex-col items-center gap-3">
                      <div
                        className="kinetic-float-soft flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-200"
                        style={{ animationDelay: `${index * 220}ms` }}
                      >
                        {index + 1}
                      </div>
                      <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">{node}</p>
                      {index < authVisualNodes.length - 1 ? (
                        <span className="absolute left-[calc(50%+1.25rem)] top-6 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-yellow-300/80 to-transparent md:block" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-8 border-b border-white/10 pb-5">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`kinetic-button text-xs font-bold uppercase tracking-[0.26em] transition ${
                    mode === "login" ? "text-yellow-200" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={`kinetic-button text-xs font-bold uppercase tracking-[0.26em] transition ${
                    mode === "register" ? "text-yellow-200" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Register
                </button>
              </div>

              <div className="mt-8 space-y-3">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white/45">
                  <span className="kinetic-live-dot" />
                  Authentication required
                </p>
                <h2 className="text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl">
                  {mode === "register" ? "Create account" : "Continue session"}
                </h2>
                <p className="max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                  Use the current backend fields, submit once, and move straight into the workspace after the response
                  returns.
                </p>
              </div>

              <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white/55">Username</span>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={updateField}
                    required
                    minLength={3}
                    maxLength={30}
                    className="kinetic-input mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-yellow-300/55"
                    placeholder="your-name"
                  />
                </label>

                <label className="block">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white/55">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    required
                    minLength={3}
                    maxLength={30}
                    className="kinetic-input mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-yellow-300/55"
                    placeholder="name@example.com"
                  />
                </label>

                <label className="block">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white/55">Password</span>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={updateField}
                    required
                    minLength={3}
                    maxLength={30}
                    className="kinetic-input mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-yellow-300/55"
                    placeholder="backend stores this lowercased"
                  />
                </label>

                {status.message ? (
                  <div
                    className={`border-l px-4 py-1 text-sm leading-6 ${
                      status.type === "error" ? "border-red-400 text-red-100" : "border-emerald-400 text-emerald-100"
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="kinetic-button inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-black uppercase tracking-[0.24em] text-black transition hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : mode === "register" ? "Create And Enter" : "Login To Workspace"}
                </button>
              </form>

              <div className="mt-12 space-y-6 border-t border-white/10 pt-8">
                <div className="kinetic-card">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Payload rule</p>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    All three fields are currently required on both auth routes.
                  </p>
                </div>
                <div className="kinetic-card">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Expected body</p>
                  <pre className="mt-4 overflow-auto whitespace-pre-wrap font-mono text-sm text-white/70">
{`{
  "username": "demo",
  "email": "demo@example.com",
  "password": "secret"
}`}
                  </pre>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
