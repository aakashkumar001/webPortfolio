import {
    MagicCard,
    MagicContainer,
  } from "@/components/magicui/magic-card";
import Image from "next/image";
  
  export function MagicCardGradient() {
    return (
      <MagicContainer
        className={
          "h-[980px] w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-10 lg:h-[800px] lg:flex-row lg:pl-28 lg:pr-28 pl-10 pr-10"
        }
      >
        <MagicCard
          borderWidth={3}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-24 shadow-2xl"
        >
           <div className="absolute w-full top-0"><img src="/image1.png" alt="project1" className="rounded-xl"/></div> 
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            InstaByte
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-2 shadow-2xl">
        <div className="w-full"><img src="/image2.png" alt="project1" className="rounded-xl"/></div> 
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Twitter Clone
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-2 shadow-2xl">
        <div className="w-full"><img src="/image3.png" alt="project1" className="rounded-xl"/></div> 
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
          Spotify clone
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    );
  }
  