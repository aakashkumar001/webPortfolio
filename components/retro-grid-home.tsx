"use client";

import IconCloudComp from "./IconCloudComp";
import { AnimatedGradientTextDemo } from "./animated-button";
import { TextRevealDemo } from "./animation-text";
import { ShimmerButtonDemo } from "./button-shimer";
import RetroGrid from "./magicui/retro-grid";
import { OrbitingCirclesDemo } from "./orbit-circle";
import { TextRevealCardPreview } from "./text-reveal-card-text";

const RetroGridHome = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <span className="absolute left-12 lg:left-8 xl:left-8 top-8 lg:top-10 xl:top-10 text-center text-5xl lg:text-6xl xl:text-6xl">✋</span>
      <span className="absolute left-28 top-10 mb-96 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl lg:text-7xl xl:7xl font-bold leading-none tracking-tighter text-transparent">
        Hi, I'm Aakash 
      </span>
      {/* <span className="text-white">
      "Hey there! I'm a full stack developer with a passion for creating seamless, user-friendly end to end applications.
      </span> */}
      {/* <span className="text-white">
        "Anything that can be imagined can be programmed." -Alan Kay
      </span> */}
      <span className="absolute top-28 left-16 lg:top-32 xl:top-32 lg:left-28 xl:left-28 max-w-96"><TextRevealDemo/></span>
      
      <div className="hidden lg:absolute lg:right10 xl:right-10 lg:block xl:block w-[600px] ml-72 p-10">
        <OrbitingCirclesDemo />
      </div>
     <div className="absolute bottom-[150px] lg:bottom-0 xl:bottom-0 lg:left-24 xl:left-24">
      {/* <ShimmerButtonDemo/> */}
      <AnimatedGradientTextDemo/>
     </div>

      <RetroGrid />
    </div>
  );
};

export default RetroGridHome;
