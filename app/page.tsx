"use client";

import ExperimentalGrid from "./components/ui/ExperimentalGrid";
import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <div className="w-auto m-h-screen font-sans">
      <Hero />
      <main className="m-6">
        <ExperimentalGrid />
      </main>
    </div>
  );
}
