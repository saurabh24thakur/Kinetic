import { Link } from "react-router";
import { useAuth } from "../../context/useAuth.js";
import { Card, Button, Grid, Badge } from "../../component/UI/index.js";

const workflowSteps = [
  {
    id: "01",
    title: "Project Initiation",
    description: "Register your domain within the Kinetic neural architecture.",
  },
  {
    id: "02",
    title: "Neural Synthesis",
    description: "Interface with the generation engine to construct complex monoliths.",
  },
  {
    id: "03",
    title: "Deployment",
    description: "Export high-fidelity architectures ready for production deployment.",
  },
];

const productSignals = [
  "Agent-first interface for parallel AI operations",
  "Multi-file project management with live preview",
  "Neural-assisted Synthesis for high-precision code",
];

const motionSignals = [
  "Agent orchestration",
  "Code generation",
  "Live preview",
  "Multi-file workspace",
  "AI-powered builders",
];

const LandingPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="kinetic-reveal" style={{ "--delay": "100ms" }}>
            <Badge variant="primary">VERSION 2.0_OBSIDIAN</Badge>
          </div>

          {/* Hero Title */}
          <div className="kinetic-reveal space-y-4" style={{ "--delay": "150ms" }}>
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent leading-[0.9] tracking-tighter">
              Neural_ <br />Architecture
            </h1>
          </div>

          {/* Subtitle */}
          <div className="kinetic-reveal max-w-2xl mx-auto" style={{ "--delay": "200ms" }}>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-medium">
              Kinetic is a high-performance instrument for turning conceptual logic into 
              sophisticated digital monoliths. Precision by design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="kinetic-reveal flex flex-col sm:flex-row gap-6 justify-center mt-8" style={{ "--delay": "250ms" }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = user ? "/workspace" : "/login"}
              className="px-12 py-4 text-xs font-black uppercase tracking-widest"
            >
              {user ? "Enter Neural Shell" : "Initialize Access"}
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById("flow").scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 text-xs font-black uppercase tracking-widest"
            >
              System Workflow
            </Button>
          </div>

          {/* Motion Signals Header - Marquee Style */}
          <div className="kinetic-reveal kinetic-marquee mt-24 opacity-40 hover:opacity-100 transition-opacity" style={{ "--delay": "300ms" }}>
            <div className="kinetic-marquee-track">
              {[...motionSignals, ...motionSignals].map((signal, index) => (
                <span key={`${signal}-${index}`} className="kinetic-marquee-item">
                  <span className="kinetic-live-dot" />
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* About Section (The Instrument) */}
      <section
        id="about"
        className="kinetic-reveal p-12 lg:p-24 space-y-12 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-3xl"
        style={{ "--delay": "350ms" }}
      >
        <div className="max-w-4xl space-y-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">The Instrument</p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl leading-[1.1] uppercase">
            We abandon the template. Kinetic treats the UI as a <span className="text-gray-500 italic">Zen-state environment.</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 font-medium max-w-2xl">
            Our design system—Digital Obsidian—prioritizes restraint. We move away from the cluttered density 
            of traditional editors toward Focused Intentionality.
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section
        id="flow"
        className="kinetic-reveal py-32 px-4 border-t border-white/5"
        style={{ "--delay": "400ms" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Steps */}
            <div className="space-y-12">
              <div className="space-y-4">
                <Badge variant="primary">HOW IT WORKS</Badge>
                <h2 className="text-5xl font-black text-white uppercase tracking-tighter">The Neural Pipeline</h2>
              </div>
              
              <div className="space-y-6">
                {workflowSteps.map((step) => (
                  <div key={step.id} className="group flex gap-8 p-10 rounded-2xl bg-white/5 border border-transparent hover:border-cyan-500/20 transition-all">
                    <span className="text-3xl font-black text-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity leading-none pt-1">
                      {step.id}
                    </span>
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white uppercase tracking-wider">{step.title}</h4>
                      <p className="text-sm leading-relaxed text-gray-500 font-medium">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Card */}
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl rounded-full opacity-50" />
               <Card className="relative h-full p-12 bg-black/40 backdrop-blur-3xl border border-white/10">
                  <Badge variant="purple" className="mb-8">WHY KINETIC</Badge>
                  <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tight leading-snug">Built for Modern <br />Development</h3>
                  
                  <div className="space-y-8">
                    {productSignals.map((signal) => (
                      <div key={signal} className="flex gap-4">
                        <div className="text-cyan-400 text-2xl font-black mt-1">✓</div>
                        <p className="text-gray-400 font-medium leading-relaxed">{signal}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" size="lg" className="w-full mt-12 py-4 text-[10px] font-black uppercase tracking-widest">
                    Start Building Now
                  </Button>
               </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
