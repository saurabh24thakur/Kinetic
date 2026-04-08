import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Workspace', path: '/workspace' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full py-6 px-10 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-[100rem] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-8 h-8 rounded-lg bg-pink-500 mb-1 flex items-center justify-center font-black text-black">K</div>
           <span className="text-xl font-black uppercase tracking-tighter">Kinetic_ <span className="text-pink-500">Engine</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all ${
                location.pathname === item.path ? 'text-pink-500 underline decoration-2' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
             <span className="material-symbols-outlined text-lg text-zinc-500 cursor-pointer hover:text-white">language</span>
             <span className="material-symbols-outlined text-lg text-zinc-500 cursor-pointer hover:text-white">person</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
