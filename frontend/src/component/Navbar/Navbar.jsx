import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth.js";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="kinetic-reveal sticky top-0 z-50 w-full border-b border-cyan-500/10 bg-[#0a0e27]/80 backdrop-blur-xl" style={{ "--delay": "80ms" }}>
      <div className="flex w-full items-center justify-between gap-6 px-4 py-4 sm:px-8 sm:py-5">
        {/* Logo */}
        <Link to="/" className="kinetic-brand flex items-center gap-2 hover:opacity-80 transition">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
            <span className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">K</span>
          </div>
          <span className="hidden sm:block text-xl font-black bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            Kinetic
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}>
            Home
          </Link>
          {user && (
            <>
              <Link to="/dashboard" className={`text-sm font-medium transition-colors ${location.pathname === '/dashboard' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}>
                Dashboard
              </Link>
              <Link to="/workspace" className={`text-sm font-medium transition-colors ${location.pathname === '/workspace' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}>
                Workspace
              </Link>
            </>
          )}
        </div>

        {/* Auth Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-xs text-cyan-400/70 font-medium px-3 py-1 rounded-lg bg-cyan-500/10">
                {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm font-medium text-gray-400 hover:text-white">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 hover:shadow-cyan-500/30 transition-all"
              >
                Initialize
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
