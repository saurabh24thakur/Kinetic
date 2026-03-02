import { Link } from "react-router";

function Navbar() {
  return (
    <div
      className="kinetic-reveal flex w-full items-center justify-between gap-4 border-b border-white/10 pb-5"
      style={{ "--delay": "80ms" }}
    >
      <Link to="/" className="kinetic-brand">
        <span className="kinetic-brand-mark text-sm font-black uppercase tracking-[0.16em] text-black">K</span>
        <span className="kinetic-brand-word">
          <span className="text-xl font-black uppercase tracking-[0.22em] text-white sm:text-2xl sm:tracking-[0.25em]">
            Kinetic
          </span>
          <span className="kinetic-brand-caption">Prototype Flow</span>
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:flex sm:text-sm">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#flow" className="transition hover:text-white">
            Flow
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>
        <Link
          to="/login"
          className="kinetic-button rounded-full bg-yellow-300 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-yellow-200 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.2em]"
        >
          Open Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
