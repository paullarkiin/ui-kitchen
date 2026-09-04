import React from "react";
import Hero from "../components/ui/Hero";
import Gallery from "../components/ui/Gallery";

export default function page() {
  return (
    <div className="w-auto m-h-screen font-sans">
      <Hero />
      <main className="m-6">
        <Gallery />
      </main>
    </div>
  );
}
