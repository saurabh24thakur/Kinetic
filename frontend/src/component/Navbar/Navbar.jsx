import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
      <div>
        <Link to="/" className="text-2xl font-black uppercase tracking-[0.25em] text-white">
          Kinetic
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/workspace"
          className="rounded-full bg-yellow-300 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-yellow-200"
        >
          Open Workspace
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
