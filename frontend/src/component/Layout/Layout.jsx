import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const isWorkspace = location.pathname === "/workspace";

  return (
    <div className={`kinetic-page min-h-screen ${isWorkspace ? 'bg-[#0a0e27]' : 'bg-[var(--surface)]'} text-white selection:bg-cyan-500/30 selection:text-white transition-colors duration-500`}>
      {/* Ambient Background Elements - Restricted on Workspace for focus */}
      {!isWorkspace && (
        <>
          <div className="kinetic-ambient-grid" />
          <div className="kinetic-ambient-scan" />
          <div className="kinetic-ambient-beam" />
          
          {/* Dynamic Blobs for Depth */}
          <div className="pointer-events-none fixed left-[10%] top-[16%] h-64 w-64 rounded-full blur-3xl opacity-20" style={{ background: 'var(--glow-cyan)' }} />
          <div className="pointer-events-none fixed right-[8%] top-[10%] h-80 w-80 rounded-full blur-3xl opacity-20" style={{ background: 'var(--glow-purple)' }} />
        </>
      )}

      <div className={`relative z-10 flex flex-col min-h-screen`}>
        {!isWorkspace && <Navbar />}
        
        <main className={`flex-1 flex flex-col ${isWorkspace ? 'h-screen overflow-hidden' : 'mx-auto w-full max-w-[100rem] p-4 sm:p-8 xl:p-12'}`}>
          <Outlet />
        </main>

        {!isWorkspace && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
