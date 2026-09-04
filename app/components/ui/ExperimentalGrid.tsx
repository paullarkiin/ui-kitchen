"use client";

import AnimatedGradientLoader from "../experiments/_chat-loader/AnimatedGradientLoader";
import ExperimentsCard from "./ExperimentsCard";

const experiments = [
  {
    id: 1,
    title: "Animated Graident Loader",
    component: AnimatedGradientLoader,
    size: "long", // 3x1
  },
  {
    id: 2,
    title: "Interactive Form",
    date: "Jan 2026",
    component: ExperimentsCard,
    size: "tall", // 1x2
  },
  {
    id: 3,
    title: "Data Visualization",
    component: ExperimentsCard,
    size: "wide", // 2x1
  },
  {
    id: 4,
    title: "Dashboard",
    component: ExperimentsCard,
    size: "large", // 2x2
  },
  {
    id: 5,
    title: "Animated Button",
    component: ExperimentsCard,
    size: "small", // 1x1
  },
  {
    id: 6,
    title: "Animated Button",
    component: ExperimentsCard,
    size: "small", // 1x1
  },
  {
    id: 7,
    title: "Animated Button",
    component: ExperimentsCard,
    size: "small", // 1x1
  },
];

const sizeClasses: Record<string, string> = {
  small: "row-span-1 col-span-1",
  tall: "row-span-2 col-span-1",
  wide: "row-span-1 col-span-2",
  large: "row-span-2 col-span-2",
  long: "row-span-3 col-span-1",
};

export default function ExperimentalGrid() {
  return (
    // auto-rows-[200px] you can add this to control how large one row is or like it hug content.
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows">
      {experiments.map((exp) => {
        const Component = exp.component;
        return (
          <div
            key={exp.id}
            className={`bg-[#F0F0F0] rounded-lg p-6 border border-zinc-200 ${sizeClasses[exp.size]}`}
          >
            <div className="flex justify-between">
              <h3 className="text-foreground text-sm mb-4">{exp.title}</h3>
              <h3 className="text-foreground text-sm mb-4">{exp.date}</h3>
            </div>
            <Component />
          </div>
        );
      })}
    </div>
  );
}
