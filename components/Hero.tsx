"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import githubDark from "../public/github-dark.svg";
import githubLight from "../public/github-light.svg";
import linkedInDark from "../public/linkedin-dark.svg";
import linkedInLight from "../public/linkedin-light.svg";
import envelopeDark from "../public/envelope-dark.png";
import envelopeLight from "../public/envelope-light1.png";
import profilePic from "../public/jake.png";
import MagicButton from "./ui/MagicButton";
import MyFlipWords from "./MyFlipWords";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-12" id="about">
      <div aria-hidden className="pointer-events-none">
        <Spotlight className="top-0 left-20 h-screen w-[70vw] opacity-40 sm:left-80" fill="#FF6FF6" />
        <Spotlight className="hidden sm:block top-0 left-[60rem] h-screen w-[50vw] opacity-40" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-[60vh] w-full items-center justify-center bg-white bg-dot-black/[0.15] dark:bg-black-100 dark:bg-dot-white/[0.15]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 mx-auto my-20 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-center md:gap-36">
          <div className="flex max-w-full flex-col items-center justify-center gap-6 text-center">
            <h1 className="max-w-60 text-[40px] font-bold text-black-100 dark:text-white md:text-4xl lg:text-5xl">
              Jake Kressley
            </h1>

            <MyFlipWords />

            <div className="flex items-center justify-center gap-6 md:justify-start">
              <a href="https://github.com/jakekressley" target="blank" className="block dark:hidden">
                <Image src={githubLight} width={64} height={64} alt="Github Logo" />
              </a>
              <a href="https://github.com/jakekressley" target="blank" className="hidden dark:block">
                <Image src={githubDark} width={64} height={64} alt="Github logo" />
              </a>

              <a href="https://www.linkedin.com/in/jakekressley/" target="blank" className="block dark:hidden">
                <Image src={linkedInLight} width={64} height={64} alt="LinkedIn Logo" />
              </a>
              <a href="https://www.linkedin.com/in/jakekressley/" target="blank" className="hidden dark:block">
                <Image src={linkedInDark} width={64} height={64} alt="LinkedIn Logo" />
              </a>

              <a href="mailto: kressleyjake@gmail.com" className="block dark:hidden">
                <Image src={envelopeLight} width={64} height={64} alt="Email Envelope Logo" className="ml-2" />
              </a>
              <a href="mailto: kressleyjake@gmail.com" className="hidden dark:block">
                <Image src={envelopeDark} width={64} height={64} alt="Email Envelope Logo" className="ml-2" />
              </a>
            </div>

            <a
              href="Jake_Kressley_Resume.pdf"
              target="blank"
              rel="noopener norefferer"
              className="mt-2 md:mt-4"
            >
              <MagicButton title="Resume" />
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={profilePic}
              alt="Profile picture"
              width={350}
              className="h-auto w-40 sm:w-56 md:w-[350px] rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
