"use client"

import { CoverParticles } from "@/components/cover-particles";
import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center">
      <TransitionPage/>
      <CoverParticles/>
      <Introduction/>
    </main>
    </>
  );
}