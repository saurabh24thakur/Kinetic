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
    <nav className="reveal flex w-full h-14 items-center justify-between border-b border-white/5 bg-[#121415] px-8 py-4 backdrop-blur-xl sticky top-0 z-[60]">
      <div className="flex items-center gap-12">
        <Link to="/" className="group flex items-center gap-2">
          <div className="h-4 w-[2px] bg-[#3291ff] shadow-[0_0_12px_#3291ff] transition-all group-hover:h-6" />
          <span className="text-sm font-black tracking-[0.2em] text-[#E2E2E3] uppercase">
            Kinetic
          </span>
        </Link>
      </div>

      <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:flex">
        <Link to="/" className={`nav-link text-[10px] font-bold uppercase tracking-[0.2em] ${location.pathname === '/' ? 'text-[#3291ff]' : 'text-[#C0C6D5]'}`}>
          Home
        </Link>
        {user && (
          <>
            <Link to="/dashboard" className={`nav-link text-[10px] font-bold uppercase tracking-[0.2em] ${location.pathname === '/dashboard' ? 'text-[#3291ff]' : 'text-[#C0C6D5]'}`}>
              Dashboard
            </Link>
            <Link to="/workspace" className={`nav-link text-[10px] font-bold uppercase tracking-[0.2em] ${location.pathname === '/workspace' ? 'text-[#3291ff]' : 'text-[#C0C6D5]'}`}>
              Workspace
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#9ece6a] shadow-[0_0_8px_#9ece6a]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2E2E3]">
                {user.username}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="text-[10px] font-bold uppercase tracking-widest text-[#C0C6D5] hover:text-[#ffb4ab] transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-[10px] font-bold uppercase tracking-widest text-[#C0C6D5] hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn-primary py-1.5 px-6 text-[10px] font-bold uppercase tracking-[0.1em]"
            >
              Initialize Access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
