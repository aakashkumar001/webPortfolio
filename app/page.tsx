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
import { Accordion } from "@/components/faq-accordion";
import MarqueeLogo from "@/components/marquee-logo";
import { TextRevealCardPreview } from "@/components/text-reveal-card-text";
import TrendChart from "@/components/trend-chart";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <div className="w-full h-screen">
        <RetroGridHome />
      </div>
      <div className="lg:hidden xl:hidden mt-0 flex flex-col
       items-center justify-center">
        <h1 className="text-white text-center font-bold text-3xl">
          Tech Stack <span>👩‍💻</span>
        </h1>
        <IconCloudComp />
      </div>
      <div className="">
        <SparklesComp text={"Tools and Platform I Use"} />
        <MarqueeLogo />
      </div>
      <div className="">
        {/* <h1 className="text-white text-center font-bold text-3xl lg:mt-10 xl:mt-10">Projects</h1> */}
        <SparklesComp text={"Projects"} />
        {/* <div className="mt-16"><MagicCardGradient/></div> */}
        <div>
          <ProjectCard />
        </div>
      </div>
      {/* <div>
        <TrendChart/>
      </div> */}
      <div>
        <SparklesComp text={"About Me 🙋‍♂️"} />
        <Accordion />
      </div>
      <div>
        <TextRevealCardPreview />
      </div>
      <div className="border-t-[1px] border-gray-600 rounded-full text-gray-300 text-center px-10 py-4">
        Made By ✨ Aakash Kumar ©️ 2024 All Rights Reserved
      </div>
      <DockSocial />
    </main>
  );
}
