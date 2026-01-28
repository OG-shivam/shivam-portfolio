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
        {/* LEFT */}
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "flex flex-col justify-center items-center md:items-start",
            "pt-28 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col gap-6">
              {/* Intro */}
              <BlurIn delay={0.6}>
                <p className="text-slate-500 dark:text-zinc-400 text-lg">
                  Hi, I am
                </p>
              </BlurIn>

              {/* Name */}
              <BlurIn delay={0.9}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1 className="text-7xl md:text-8xl xl:text-9xl font-thin text-slate-200 leading-none">
                      {config.author}
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>👀 check devtools</p>
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              {/* Role */}
              <BlurIn delay={1.2}>
                <p className="text-slate-500 dark:text-zinc-400 text-xl">
                  A Full Stack Web Developer
                </p>
              </BlurIn>

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <Link href="#contact">
                  <Button variant="outline">Hire Me</Button>
                </Link>

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
          )}
        </div>

        {/* RIGHT (intentionally empty – 3D handled elsewhere) */}
        <div className="hidden md:block" />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
