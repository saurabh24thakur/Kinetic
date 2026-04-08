import { Outlet, useLocation } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const isWorkspace = location.pathname === "/workspace";

  return (
    <div className={`min-h-screen ${isWorkspace ? 'bg-[#121415]' : 'bg-[var(--surface-dim)]'} text-[var(--on-surface)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)] transition-colors duration-500`}>
      {/* Ambient Depth Layer */}
      {!isWorkspace && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-[10%] -top-[10%] h-[40rem] w-[40rem] rounded-full bg-[var(--primary)] opacity-[0.03] blur-[120px]" />
          <div className="absolute -right-[5%] bottom-[10%] h-[30rem] w-[30rem] rounded-full bg-[var(--primary-container)] opacity-[0.02] blur-[100px]" />
        </div>
      )}

      <div className={`relative z-10 flex flex-col min-h-screen`}>
        {!isWorkspace && <Navbar />}
        
        <main className={`flex-1 flex flex-col ${isWorkspace ? 'h-screen overflow-hidden' : 'w-full max-w-[100rem] mx-auto p-4 sm:p-6 lg:p-8'}`}>
          <Outlet />
        </main>

        {!isWorkspace && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
