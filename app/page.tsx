
import Image from "next/image";

import RetroGrid from "@/components/magicui/retro-grid";
import RetroGridHome from "@/components/retro-grid-home";
import { DockSocial } from "@/components/dockSocial";
import DotPatternHero from "@/components/dot-pattern-hero";
import { OrbitingCirclesDemo } from "@/components/orbit-circle";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="w-full h-screen">
      <RetroGridHome/>
      </div>
     
      <DockSocial/>
    </main>
  );
}
