import Image from "next/image";

import RetroGrid from "@/components/magicui/retro-grid";
import RetroGridHome from "@/components/retro-grid-home";
import { DockSocial } from "@/components/dockSocial";
import DotPatternHero from "@/components/dot-pattern-hero";
import { OrbitingCirclesDemo } from "@/components/orbit-circle";
import IconCloudComp from "@/components/IconCloudComp";
import { MagicCardGradient } from "@/components/Card";
import { ProjectCard } from "@/components/project-card";
import { SparklesComp } from "@/components/Sparkles-comp";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="w-full h-screen">
        <RetroGridHome />
      </div>
      <div className="lg:hidden xl:hidden mt-0">
        <h1 className="text-white text-center font-bold text-3xl">
          Tech Stack
        </h1>
        <IconCloudComp />
      </div>
      <div className="">
        {/* <h1 className="text-white text-center font-bold text-3xl lg:mt-10 xl:mt-10">Projects</h1> */}
        <SparklesComp text={"Projects"}/>
        {/* <div className="mt-16"><MagicCardGradient/></div> */}
        <div><ProjectCard/></div>
      </div>
      <div>
      <SparklesComp text={"FAQs"}/>
      </div>
      <DockSocial />
    </main>
  );
}
