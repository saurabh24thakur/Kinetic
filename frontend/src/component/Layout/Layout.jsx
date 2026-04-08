import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="kinetic-page min-h-screen text-white selection:bg-cyan-500/30 selection:text-white" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Ambient Background Elements - Persistent across routes */}
      <div className="kinetic-ambient-grid" />
      <div className="kinetic-ambient-scan" />
      <div className="kinetic-ambient-beam" />
      
      {/* Dynamic Blobs for Depth */}
      <div className="pointer-events-none fixed left-[10%] top-[16%] h-64 w-64 rounded-full blur-3xl kinetic-float-soft" style={{ background: 'var(--glow-cyan)' }} />
      <div className="pointer-events-none fixed right-[8%] top-[10%] h-80 w-80 rounded-full blur-3xl kinetic-float-soft" style={{ animationDelay: "1s", background: 'var(--glow-purple)' }} />
      <div className="pointer-events-none fixed bottom-[10%] left-[20%] h-72 w-72 rounded-full blur-3xl kinetic-float-soft" style={{ animationDelay: "2s", background: 'var(--glow-purple)' }} />

      <div className="relative z-10 w-full px-5 pb-8 pt-4 sm:px-8 sm:pb-12 xl:px-12">
        <div className="kinetic-page-shell mx-auto flex w-full max-w-[92rem] flex-col gap-8">
          <Navbar />
          
          {/* Main Content Area */}
          <main className="min-h-[60vh] w-full">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
