import { Link } from "react-router";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image2.png";
import { useAuth } from "../../context/useAuth.js";
import { Card, Button, Grid, Badge } from "../../component/UI/index.js";

const workflowSteps = [
  {
    id: "01",
    title: "Create an account",
    description: "Register or log in to access the full power of Kinetic.",
  },
  {
    id: "02",
    title: "Enter the workspace",
    description: "Access the agent-first interface for building full-stack prototypes.",
  },
  {
    id: "03",
    title: "Generate & iterate",
    description: "Use AI agents to generate code, manage files, and preview results in real-time.",
  },
];

const productSignals = [
  "Agent-first interface for parallel AI operations",
  "Multi-file project management with live preview",
  "Cursor-inspired modern design and workflow",
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
    <>
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:py-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="kinetic-reveal" style={{ "--delay": "100ms" }}>
            <Badge variant="primary">Build Faster with AI</Badge>
          </div>

          {/* Hero Title */}
          <div className="kinetic-reveal space-y-4" style={{ "--delay": "150ms" }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent leading-tight">
              The AI-Powered Prototype Builder
            </h1>
          </div>

          {/* Subtitle */}
          <div className="kinetic-reveal max-w-2xl mx-auto" style={{ "--delay": "200ms" }}>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Kinetic is an agent-first platform for building full-stack prototypes with AI. Generate code, manage multi-file projects, and iterate in real-time with our Cursor-inspired interface.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="kinetic-reveal flex flex-col sm:flex-row gap-4 justify-center mt-8" style={{ "--delay": "250ms" }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = user ? "/workspace" : "/login"}
            >
              {user ? "Enter Workspace" : "Get Started"}
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById("features").scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Motion Signals */}
          <div className="kinetic-reveal kinetic-marquee mt-12" style={{ "--delay": "300ms" }}>
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

      {/* Features Section */}
      <section
        id="features"
        className="kinetic-reveal py-20 sm:py-32 px-4 border-t border-cyan-500/10"
        style={{ "--delay": "400ms" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <Badge variant="purple" className="mb-6">Features</Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Everything You Need to Build
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kinetic provides all the tools to transform ideas into production-ready prototypes with AI assistance.
            </p>
          </div>

          <Grid cols={3} gap={6}>
            {[
              {
                title: "Agent Orchestration",
                description: "Parallel AI operations for faster development and smarter code generation.",
                icon: "🤖"
              },
              {
                title: "Multi-File Management",
                description: "Organize and manage complex projects with an intuitive file explorer.",
                icon: "📁"
              },
              {
                title: "Live Preview",
                description: "See your changes in real-time with instant preview rendering.",
                icon: "👁️"
              },
              {
                title: "Code Generation",
                description: "Generate production-quality code with AI-powered suggestions.",
                icon: "⚡"
              },
              {
                title: "Modern UI",
                description: "Cursor-inspired interface designed for productivity and beauty.",
                icon: "🎨"
              },
              {
                title: "Full-Stack Support",
                description: "Build complete applications with frontend and backend integration.",
                icon: "🔗"
              },
            ].map((feature, idx) => (
              <Card key={idx} className="h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </Grid>
        </div>
      </section>

      {/* Workflow Section */}
      <section
        id="flow"
        className="kinetic-reveal py-20 sm:py-32 px-4 border-t border-cyan-500/10"
        style={{ "--delay": "500ms" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div>
              <Badge variant="primary" className="mb-6">How It Works</Badge>
              <h2 className="text-4xl sm:text-5xl font-black mb-12">Three Steps to Success</h2>
              
              <div className="space-y-8">
                {workflowSteps.map((step, idx) => (
                  <div key={step.id} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-cyan-500/50">
                        <span className="text-cyan-400 font-bold text-lg">{step.id}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <Card className="h-full">
                <Badge variant="purple" className="mb-6">Why Kinetic</Badge>
                <h3 className="text-3xl font-bold text-white mb-8">Built for Modern Development</h3>
                
                <div className="space-y-6">
                  {productSignals.map((signal) => (
                    <div key={signal} className="flex gap-4">
                      <div className="text-cyan-400 text-2xl mt-1">✓</div>
                      <div>
                        <p className="text-gray-300 leading-relaxed">{signal}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="lg" className="w-full mt-8">
                  Start Building Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
