const Footer = () => {
  return (
    <footer className="py-12 px-10 border-t border-white/5 bg-black">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
           <span className="text-xl font-black uppercase tracking-tighter">Kinetic_ <span className="text-pink-500">Engine</span></span>
           <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest leading-relaxed text-center md:text-left">
             © 2026 Kinetic Neural Interface. <br />
             All protocols manifest in pure logic.
           </p>
        </div>
        
        <div className="flex gap-12">
          {['Privacy', 'Architecture', 'Discord', 'Docs'].map(item => (
            <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 group cursor-pointer">
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white">System_Status: Optimal</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
