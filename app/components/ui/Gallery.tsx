"use client";

import Dropdown from "../experiments/Dropdown";
import { AnimatedGradientTwo } from "../experiments/_chat-loader/AnimatedGraidentTwo";

export default function Gallery() {
  const experiments = [
    {
      id: 1,
      title: "Animated Graident Loader",
      component: AnimatedGradientTwo,
    },
    {
      id: 2,
      title: "Interactive Form",
      date: "Jan 2026",
      component: Dropdown,
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-3xl h-screen gap-6">
        {experiments.map((exp) => {
          const Component = exp.component;
          return (
            <>
              <div
                key={exp.id}
                className={`flex h-200 w-full items-center justify-center bg-[#F0F0F0] rounded-lg p-6 border border-zinc-200`}
              >
                <Component />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
