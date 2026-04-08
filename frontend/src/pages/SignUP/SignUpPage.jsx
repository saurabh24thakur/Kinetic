import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth.js";
import { Button, Input } from "../../component/UI/index.js";

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
        message: "Registration successful. Redirecting...",
      });
      setTimeout(() => navigate("/workspace"), 800);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Registration failed.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <div 
          className="kinetic-reveal mb-8"
          style={{ "--delay": "100ms" }}
        >
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50">
              <span className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">K</span>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Kinetic
            </span>
          </Link>
        </div>

        {/* Form Card */}
        <div 
          className="kinetic-reveal kinetic-panel rounded-2xl p-8"
          style={{ "--delay": "150ms" }}
        >
          {/* Tab Navigation */}
          <div className="flex gap-4 border-b border-cyan-500/20 pb-6 mb-8">
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-500 hover:text-gray-400 pb-2 transition"
            >
              Login
            </Link>
            <button
              type="button"
              className="text-sm font-semibold text-cyan-400 border-b-2 border-cyan-400 pb-2 transition"
            >
              Create Account
            </button>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-gray-400">Join Kinetic and start building</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input 
              label="Username"
              type="text"
              name="username"
              value={form.username}
              onChange={updateField}
              required
              placeholder="your-username"
            />

            <Input 
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              required
              placeholder="you@example.com"
            />

            <Input 
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={updateField}
              required
              placeholder="••••••••"
            />

            {/* Status Messages */}
            {status.message && (
              <div className={`p-4 rounded-lg text-sm ${
                status.type === "error" 
                  ? "bg-red-500/10 border border-red-500/30 text-red-300" 
                  : "bg-green-500/10 border border-green-500/30 text-green-300"
              }`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <Button 
              variant="primary" 
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Already have an account? {' '}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 transition">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
