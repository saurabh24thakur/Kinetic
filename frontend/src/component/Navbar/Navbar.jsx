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
    <div
      className="kinetic-reveal flex w-full items-center justify-between gap-4 border-b border-white/10 pb-5"
      style={{ "--delay": "80ms" }}
    >
      <Link to="/" className="kinetic-brand">
        <span className="kinetic-brand-word">
          <span className="text-xl font-black uppercase tracking-[0.22em] text-white sm:text-2xl sm:tracking-[0.25em]">
            Kinetic
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:flex sm:text-sm">
          <a href={location.pathname === "/" ? "#about" : "/#about"} className="transition hover:text-white">
            About
          </a>
          <a href={location.pathname === "/" ? "#flow" : "/#flow"} className="transition hover:text-white">
            Flow
          </a>
          {user && (
            <Link to="/workspace" className="transition hover:text-white">
              Workspace
            </Link>
          )}
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="hidden text-[10px] font-bold uppercase tracking-widest text-yellow-200/50 sm:block">
              {user.username}
            </span>
            <button
              onClick={handleLogout}
              className="kinetic-button rounded-full border border-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-white/40 transition sm:px-5 sm:py-3 sm:text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="kinetic-button rounded-full bg-yellow-300 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-yellow-200 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.2em]"
          >
            Open Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
