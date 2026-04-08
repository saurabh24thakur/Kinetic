import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth.js";

const emptyForm = {
  username: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
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
      await register({
        username: form.username.trim(),
        email: form.email.trim(),
        password: form.password,
      });
      setForm(emptyForm);
      setStatus({
        type: "success",
        message: "Neural identity synthesized. Redirecting...",
      });
      setTimeout(() => navigate("/workspace"), 800);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Synthesis failed. Identify constraints.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12 px-6">
      <section className="reveal monolith-card w-full max-w-md p-10 bg-[var(--surface-container)] border border-[var(--outline-variant)] shadow-2xl">
        <div className="mb-12 space-y-4">
           <div className="flex items-center justify-between">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--on-surface-variant)] opacity-40">Identity_Synthesis</p>
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_var(--primary)] animate-pulse" />
           </div>
           
           <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-1 flex-1 bg-[var(--surface-submerged)] rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-[var(--primary)] transition-all duration-1000 ${i <= 1 ? 'w-full' : 'w-0'}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  />
                </div>
              ))}
           </div>
        </div>

        <div className="flex items-center gap-8 border-b border-[var(--outline-variant)] mb-10 pb-1">
          <Link
            to="/login"
            className="text-[10px] font-black uppercase tracking-[0.3em] pb-4 text-[var(--on-surface-variant)] opacity-40 hover:opacity-100 transition-opacity"
          >
            Authorize
          </Link>
          <button
            type="button"
            className="text-[10px] font-black uppercase tracking-[0.3em] pb-4 border-b-2 border-[var(--primary)] text-[var(--on-surface)]"
          >
            Register
          </button>
        </div>

        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--on-surface)]">
            Create_ <br /><span className="text-[var(--primary)]">Identity</span>
          </h2>
          <p className="text-xs text-[var(--on-surface-variant)] opacity-60">
            Establish your node in the neural architecture.
          </p>
        </div>

        <form className="mt-12 space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--on-surface-variant)] opacity-40">Alias</span>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={updateField}
              required
              className="input-field w-full"
              placeholder="alias_01"
            />
          </div>

          <div className="space-y-2">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--on-surface-variant)] opacity-40">Neural_Address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              required
              className="input-field w-full"
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-2">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--on-surface-variant)] opacity-40">Security_Key</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={updateField}
              required
              className="input-field w-full"
              placeholder="••••••••"
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded text-[10px] font-bold uppercase tracking-widest ${
              status.type === "error" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
            }`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full py-4 uppercase tracking-[0.3em] text-xs font-black shadow-[0_0_20px_rgba(50,145,255,0.2)]"
          >
            {isSubmitting ? "Synthesizing..." : "Initialize Profile"}
          </button>
        </form>

        <p className="mt-12 text-center text-[8px] font-black uppercase tracking-[0.4em] text-[var(--on-surface-variant)] opacity-20">
          Neural_Vault_v1.0.4 // Kinetic_OS
        </p>
      </section>
    </div>
  );
};

export default SignUpPage;
