"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen pt-24 bg-black overflow-hidden relative">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] pointer-events-none"></div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Meet Kinetic
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            The AI Code Editor that actually ships.Turn your ideas into high quality product. Code less,Work More.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="mt-20 w-full aspect-video rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-3xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5"></div>
            <div className="flex items-center justify-center h-full text-gray-500">
              [Dashboard Preview Placeholder]
            </div>
          </div>
        </main>
      </div>
    </ClickSpark>
  );
}
