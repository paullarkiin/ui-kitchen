"use client";

import ExperimentalGrid from "./components/ui/ExperimentalGrid";

export default function Home() {
  return (
    <div className="w-auto h-full font-sans">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-screen auto-rows-[400px] m-6">
        <div className="bg-[#F0F0F0] rounded-lg border border-zinc-200">
          <div className="flex justify-between">
            <p className="text-black m-2">Hello this is a title!</p>
            <p className="text-black m-2">Jan 2026</p>
          </div>
        </div>
        <div className="bg-[#F0F0F0] rounded-lg border border-zinc-200">
          <div className="flex justify-between">
            <p className="text-black m-2">Hello this is a title!</p>
            <p className="text-black m-2">Jan 2026</p>
          </div>
        </div>
        <div className="bg-[#F0F0F0] rounded-lg border border-zinc-200">
          <div className="flex justify-between">
            <p className="text-black m-2">Hello this is a title!</p>
            <p className="text-black m-2">Jan 2026</p>
          </div>
        </div>
        <div className="bg-[#F0F0F0] rounded-lg border border-zinc-200">
          <div className="flex justify-between">
            <p className="text-black m-2">Hello this is a title!</p>
            <p className="text-black m-2">Jan 2026</p>
          </div>
        </div>
      </main>
      <section>
        <ExperimentalGrid />
      </section>
    </div>
  );
}
