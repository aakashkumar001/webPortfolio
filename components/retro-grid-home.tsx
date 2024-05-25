"use client";

import RetroGrid from "./magicui/retro-grid";
import { OrbitingCirclesDemo } from "./orbit-circle";

const RetroGridHome = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Hi, I am Aakash
      </span>
      <span className="text-center text-7xl font-bold">✋</span>
      <div className="hidden lg:block xl:block w-[600px] ml-72 p-10">
        <OrbitingCirclesDemo />
      </div>

      <RetroGrid />
    </div>
  );
};

export default RetroGridHome;
