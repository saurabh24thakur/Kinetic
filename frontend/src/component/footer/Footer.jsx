const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center px-6 border-t border-white/5 bg-[#0C0E0F] h-8 font-mono text-[9px] uppercase tracking-widest text-[#C0C6D5]/40 mt-auto">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 hover:text-[#3291ff] cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-[12px]">account_tree</span>
          <span>main_stable</span>
        </div>
        <div className="flex items-center gap-4">
           <p>Neural_Link: <span className="text-[#9ece6a]">Active</span></p>
           <p>Latency: 24ms</p>
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <p>© 2026 Kinetic.Engine_v2</p>
        <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="material-symbols-outlined text-[12px]">bug_report</span>
          <span>Report_Anomaly</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
