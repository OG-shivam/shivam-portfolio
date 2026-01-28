"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { usePreloader } from "../preloader";
import { BlurIn } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";

import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className="relative w-full h-screen">
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              {/* Intro text */}
              <BlurIn delay={0.7}>
                <p className="mt-4 font-thin text-md text-slate-500 dark:text-zinc-400">
                  Hi, I am
                </p>
              </BlurIn>

              {/* Name */}
              <BlurIn delay={1}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1 className="leading-none font-thin text-transparent text-slate-800 font-display text-7xl md:text-8xl xl:text-9xl">
                      {config.author}
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="dark:bg-white dark:text-black"
                  >
                    there’s something waiting for you in devtools 👀
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              {/* Role */}
              <BlurIn delay={1.2}>
                <p className="mt-4 font-thin text-md text-slate-500 dark:text-zinc-400">
                  A Full Stack Web Developer
                </p>
              </BlurIn>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 w-fit">
                {/* ✅ RESUME REMOVED (INTENTIONALLY) */}
                {/*
                <Link
                  href="https://drive.google.com/your-resume-link"
                  target="_blank"
                >
                  <Button className="flex items-center gap-2 w-full">
                    Resume
                  </Button>
                </Link>
                */}

                <div className="flex gap-3 items-center">
                  {/* Hire Me */}
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <Button variant="outline">Hire Me</Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹🙏</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Social Icons */}
                  <Link href={config.social.twitter} target="_blank">
                    <Button variant="outline">
                      <SiX size={20} />
                    </Button>
                  </Link>

                  <Link href={config.social.github} target="_blank">
                    <Button variant="outline">
                      <SiGithub size={20} />
                    </Button>
                  </Link>

                  <Link href={config.social.linkedin} target="_blank">
                    <Button variant="outline">
                      <SiLinkedin size={20} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right empty column (for animation / canvas background) */}
        <div className="col-span-1" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

