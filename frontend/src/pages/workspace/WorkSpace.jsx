import { useEffect, useState } from "react";
import { Link } from "react-router";
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

function WorkSpace() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

      setCurrentUser(data);
      setForm(emptyForm);
      setStatus({
        type: "success",
        message:
          mode === "register"
            ? "Account created. You are now in the workspace."
            : "Login successful. Workspace unlocked.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleLogout() {
    setCurrentUser(null);
    setPrompt("");
    setStatus({ type: "success", message: "You have been signed out." });
    setMode("login");
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#000000_0%,#101010_40%,#1f2937_100%)] px-5 py-6 text-white sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-200/85">Workspace</p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
              Make your prompt alive
            </h1>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              This screen is now built around the current backend auth API. Sign in or create an account with
              `username`, `email`, and `password`, then continue in the prompt workspace.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Back To Landing
          </Link>
        </header>

        <main className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-white/10 bg-black/50 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1 text-sm font-bold uppercase tracking-[0.18em]">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 rounded-full px-4 py-3 transition ${
                  mode === "login" ? "bg-yellow-300 text-black" : "text-white/60"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`flex-1 rounded-full px-4 py-3 transition ${
                  mode === "register" ? "bg-yellow-300 text-black" : "text-white/60"
                }`}
              >
                Register
              </button>
            </div>

            <div className="mt-8 space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-[-0.04em]">
                {mode === "register" ? "Create account" : "Continue session"}
              </h2>
              <p className="text-sm leading-6 text-white/65">
                The backend currently expects all three fields on both routes and stores them lowercased.
              </p>
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                  Username
                </span>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={updateField}
                  required
                  minLength={3}
                  maxLength={30}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition focus:border-yellow-300/60"
                  placeholder="your-name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  minLength={3}
                  maxLength={30}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition focus:border-yellow-300/60"
                  placeholder="name@example.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={updateField}
                  required
                  minLength={3}
                  maxLength={30}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition focus:border-yellow-300/60"
                  placeholder="backend stores this lowercased"
                />
              </label>

              {status.message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "error"
                      ? "border-red-500/30 bg-red-500/10 text-red-100"
                      : "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-yellow-300 px-5 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : mode === "register" ? "Create And Enter" : "Login To Workspace"}
              </button>
            </form>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
            {currentUser ? (
              <div className="flex h-full flex-col">
                <div className="flex flex-col gap-4 rounded-[1.75rem] border border-yellow-300/20 bg-black/45 p-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-yellow-200/80">Signed in</p>
                    <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
                      {currentUser.username}
                    </h2>
                    <p className="mt-2 text-sm text-white/60">{currentUser.email}</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full border border-white/15 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/75 transition hover:border-white/35 hover:text-white"
                  >
                    Logout
                  </button>
                </div>

                <div className="mt-6 flex flex-1 flex-col rounded-[1.75rem] border border-white/10 bg-black/45 p-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Prompt draft</p>
                    <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.04em]">
                      Next backend feature slot
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                      The prompt composer is still a frontend placeholder, but it now sits behind a working auth flow
                      that matches the existing API.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col gap-4">
                    <textarea
                      name="prompt"
                      value={prompt}
                      onChange={(event) => setPrompt(event.target.value)}
                      rows={10}
                      className="min-h-56 flex-1 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition focus:border-yellow-300/60"
                      placeholder="Describe the product flow you want Kinetic to generate next."
                    />

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Prompt tools can be wired here once backend generation routes exist.
                      </p>
                      <button
                        type="button"
                        className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-yellow-200"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {workspaceHighlights.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-dashed border-white/15 bg-black/30 p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">Workspace status</p>
                  <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em]">
                    Authentication required
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
                    Use the form to register or log in. Once the backend returns a user object, this panel becomes the
                    active prompt workspace.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {workspaceHighlights.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 font-mono text-sm text-white/70">
                  <p className="text-yellow-200">Expected request body</p>
                  <pre className="mt-4 overflow-auto whitespace-pre-wrap">
{`{
  "username": "demo",
  "email": "demo@example.com",
  "password": "secret"
}`}
                  </pre>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default WorkSpace;
