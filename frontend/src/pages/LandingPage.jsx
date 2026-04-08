import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Artifacts */}
      <div className="geometric-bg animate-rotate-slow scale-150" />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-pink-500/10 to-transparent pointer-events-none" />
      
      {/* Twinkling Stars */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-40 ml-4 mb-4"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 py-20">
        {/* Left: Content */}
        <div className="flex-1 space-y-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-[-0.05em]">
              ELEVATE YOUR <br />
              <span className="text-pink-wave">KINETIC</span> <br />
              VISION
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join us at Kinetic for a fusion of architectural design, 
              AI innovation, and engineering inspiration. Experience 
              high-fidelity synthesis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 items-center"
          >
            <button className="btn-pill">Get your passes</button>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
               Nebula_Link // 01
            </div>
          </motion.div>
        </div>

        {/* Right: The Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative flex-1 flex justify-center lg:justify-end"
        >
           <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[40px] overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="Kinetic Art" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
              />
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.2),transparent_60%)] z-20 pointer-events-none" />
           </div>

           {/* Floating Tag */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -bottom-6 -left-6 z-30 p-6 glass-panel space-y-2 max-w-[200px]"
           >
              <p className="text-[10px] font-black uppercase tracking-widest text-pink-500">Synthesis_Enabled</p>
              <p className="text-[11px] text-zinc-400 font-medium leading-tight">
                Architectural intent manifest in pure logic.
              </p>
           </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
