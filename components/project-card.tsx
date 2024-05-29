"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./background-gradient";
import Link from "next/link";
import {
  FileCode,
  Globe,
  Globe2Icon,
  Settings2,
  SettingsIcon,
  TextSearchIcon,
} from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BorderBeam } from "./magicui/border-beam";

export function ProjectCard() {
  return (
    <div className="mt-0 grid lg:grid-cols-2 xl:grid-cols-2 gap-0 lg:p-32 xl:p-32 lg:py-0 xl:py-0 sm:grid-cols-1">
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl flex gap-2 font-bold text-neutral-600 dark:text-white"
            >
              <div>InstaByte</div>

              <div className="whitespace-nowrap rounded-full bg-purple-600 text-center px-2 py-0.5 text-sm text-purple-100">
                new
              </div>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Instabyte is a social media platform similar to instagram where
              people can share posts, follow and like each other and users also
              posts and watch reels.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src="/image1.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={50}
                as={Link}
                href="https://github.com/aakashkumar001/xApp"
                target="__blank"
                className="px-4 flex gap-1 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <span>
                  <GitHubLogoIcon />
                </span>
                <span>Github</span>
              </CardItem>
              <CardItem
                translateZ={50}
                as={Link}
                href="https://github.com/aakashkumar001/xApp"
                target="__blank"
                className="px-2 flex justify-center items-center gap-2 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <span>
                  <Image
                    src="/appwrite.svg"
                    width={16}
                    height={16}
                    alt="appwrite"
                  />
                </span>
                {/* <span><Image src="/react-query.svg" width={16} height={16} alt="appwrite"/></span>  */}
                <span>
                  <Image
                    src="/TypeScript.svg"
                    width={16}
                    height={16}
                    alt="appwrite"
                  />
                </span>
                <span>
                  <Image
                    src="/nextjs-icon.svg"
                    width={20}
                    height={20}
                    alt="appwrite"
                    className="bg-white rounded-full"
                  />
                </span>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://x-app-git-main-aakashkumar001s-projects.vercel.app/"
                target="blank"
                className=" flex gap-2 justify-center items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <span>
                  <Globe />
                </span>
                <span>website</span>
              </CardItem>
            </div>
            <BorderBeam size={250} duration={12} delay={9} />
          </CardBody>
        </CardContainer>
      </div>
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Zwitter
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              It is clone web application of twitter.It has feature like posting
              tweets and photos. Users can comment and likes on tweets. It has
              seamless user experience.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src="/image2.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/aakashkumar001/Zwitter-clone"
                target="__blank"
                className="px-4 py-2 flex gap-1 rounded-xl text-xs font-normal dark:text-white"
              >
                <span>
                  <GitHubLogoIcon />
                </span>
                <span>Github</span>
              </CardItem>
              <CardItem
                translateZ={50}
                as={Link}
                href="https://github.com/aakashkumar001/xApp"
                target="__blank"
                className="px-2 flex justify-center items-center gap-2 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <span>
                  <Image
                    src="/MongoDB.svg"
                    width={16}
                    height={16}
                    alt="appwrite"
                  />
                </span>
                <span>
                  <Image
                    src="/TypeScript.svg"
                    width={16}
                    height={16}
                    alt="appwrite"
                  />
                </span>

                <span>
                  <Image
                    src="/nextjs-icon.svg"
                    width={20}
                    height={20}
                    alt="appwrite"
                    className="bg-white rounded-full"
                  />
                </span>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://zwitter-clone.vercel.app/"
                target="blank"
                className="flex gap-2 justify-center items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <span>
                  <Globe />
                </span>
                <span>website</span>
              </CardItem>
            </div>
            <BorderBeam size={250} duration={12} delay={9} />
          </CardBody>
        </CardContainer>
      </div>
      <div>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Spotify
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This web platform is made with Supabse backend. Its feature is
              user can upload their favourite song on cloud and listen to them
              when they want.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src="/image3.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/aakashkumar001/spotify-clone"
                target="__blank"
                className="px-4 py-2 flex gap-1 rounded-xl text-xs font-normal dark:text-white"
              >
                <span>
                  <GitHubLogoIcon />
                </span>
                <span>Github</span>
              </CardItem>
              <CardItem
                translateZ={50}
                as={Link}
                href="https://github.com/aakashkumar001/xApp"
                target="__blank"
                className="px-2 flex justify-center items-center gap-2 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {/* <span><FileCode size={16}/></span> <span>Tech</span>  */}
                <span>
                  <Image
                    src="/supabase.svg"
                    width={16}
                    height={16}
                    alt="appwrite"
                  />
                </span>
                <span>
                  <Image
                    src="/TypeScript.svg"
                    width={16}
                    height={16}
                    alt="appwrite"
                  />
                </span>
                <span>
                  <Image
                    src="/nextjs-icon.svg"
                    width={20}
                    height={20}
                    alt="appwrite"
                    className="bg-white rounded-full"
                  />
                </span>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                target="blank"
                href="https://spotify-clone-aakashkumar001.vercel.app/"
                className="flex gap-2 justify-center items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <span>
                  <Globe />
                </span>
                <span>website</span>
              </CardItem>
            </div>
            <BorderBeam size={250} duration={12} delay={9} />
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
