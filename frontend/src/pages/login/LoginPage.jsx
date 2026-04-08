import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth.js";
import { Button } from "../../component/UI/index.js";

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
        message: "Session authenticated. Re-establishing link...",
      });
      setTimeout(() => navigate("/workspace"), 800);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Credential verification failed.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="kinetic-reveal mb-8" style={{ "--delay": "100ms" }}>
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50">
              <span className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">K</span>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent uppercase tracking-widest">
              Kinetic
            </span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="kinetic-reveal p-10 bg-[#0a0e27]/40 backdrop-blur-2xl rounded-2xl border border-cyan-500/20" style={{ "--delay": "150ms" }}>
          {/* Tab Navigation */}
          <div className="flex gap-8 border-b border-cyan-500/10 pb-6 mb-10">
            <button type="button" className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 border-b-2 border-cyan-400 pb-6 -mb-6 transition">
              Authorize
            </button>
            <Link to="/signup" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-gray-300 transition">
              Construct Identity
            </Link>
          </div>

          {/* Form Header */}
          <div className="mb-10 space-y-2">
            <h1 className="text-4xl font-black text-white tracking-tight uppercase leading-none">Welcome_ <br /><span className="text-cyan-400">Back</span></h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Quantum_Auth_v2.0</p>
          </div>

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">User_Identity</p>
               <input 
                 type="email"
                 name="email"
                 value={form.email}
                 onChange={updateField}
                 required
                 placeholder="name@example.com"
                 className="input-field w-full"
               />
            </div>

            <div className="space-y-2">
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">Security_Key</p>
               <input 
                 type="password"
                 name="password"
                 value={form.password}
                 onChange={updateField}
                 required
                 placeholder="••••••••"
                 className="input-field w-full"
               />
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                status.type === "error" 
                  ? "bg-red-500/10 border border-red-500/30 text-red-400" 
                  : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
              }`}>
                {status.message}
              </div>
            )}

            <Button 
              variant="primary" 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              {isSubmitting ? "Verifying..." : "Initialize Session"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-[9px] font-bold text-gray-600 text-center mt-10 uppercase tracking-[0.3em]">
            New to Kinetic? {' '}
            <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition">
              Register_ID
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
