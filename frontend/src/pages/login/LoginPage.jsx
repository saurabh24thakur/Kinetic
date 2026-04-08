import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth.js";

const emptyForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await login({
        email: form.email.trim(),
        password: form.password,
      });
      setForm(emptyForm);
      setStatus({
        type: "success",
        message: "Login successful. Redirecting...",
      });
      setTimeout(() => navigate("/workspace"), 800);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Login failed. Please check your credentials.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-10">
      <section
        className="kinetic-reveal kinetic-panel w-full max-w-[28rem] rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl sm:p-12"
        style={{ "--delay": "260ms" }}
      >
        <div className="kinetic-reveal mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5" style={{ "--delay": "300ms" }}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">Protocol status</p>
            <span className="kinetic-live-dot" />
          </div>

          <div className="mt-6 flex justify-between gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-1 w-full rounded-full bg-white/5 overflow-hidden"
              >
                <div 
                  className={`h-full bg-yellow-300 transition-all duration-700 ${i <= 2 ? 'w-full' : 'w-0'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8 border-b border-white/10 pb-5">
          <button
            type="button"
            className="kinetic-button text-[11px] font-bold uppercase tracking-[0.26em] transition text-yellow-200"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="kinetic-button text-[11px] font-bold uppercase tracking-[0.26em] transition text-white/40 hover:text-white/70"
          >
            Register
          </Link>
        </div>

        <div className="mt-8 space-y-3">
          <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl">
            Welcome back
          </h2>
          <p className="text-xs leading-6 text-white/50">
            Verify your identity to enter the workspace.
          </p>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              required
              className="kinetic-input mt-3 w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-yellow-300/50"
              placeholder="name@example.com"
            />
          </label>

          <label className="block">
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={updateField}
              required
              className="kinetic-input mt-3 w-full border-b border-white/10 bg-transparent pb-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-yellow-300/50"
              placeholder="••••••••"
            />
          </label>

          {status.message ? (
            <div
              className={`border-l-2 px-4 py-2 text-xs leading-5 transition-all ${
                status.type === "error" ? "border-red-400/50 bg-red-400/5 text-red-200" : "border-emerald-400/50 bg-emerald-400/5 text-emerald-200"
              }`}
            >
              {status.message}
            </div>
          ) : null}

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="kinetic-button group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-yellow-300 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-black transition hover:bg-yellow-200 disabled:opacity-50"
            >
              <span className="relative z-10 transition-transform group-hover:scale-105">
                {isSubmitting ? "Processing..." : "Enter Workspace"}
              </span>
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          Kinetic Auth Protocol v1.0.4
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
