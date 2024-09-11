import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline"

export function MyTimeline() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24 max-w-7xl">
          <Image
            src="/advantexe-logo.png"
            alt="Advantexe Logo"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:white-shadow"
          />
          <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              Software Engineer Intern
            </h1>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8 max-w-lg">
              My second summer at Advantexe Learning Solutions allowed me to further hone my technical skills. Working in a cross-functional team, I was able to significantly enhance my communication skills. My team was tasked with designing and developing a business acumen simulation from scratch, giving me insight into the product development cycle and further building on my skills as a teammate and leader. Additionally, I conducted research to identify the most effective charting API, which played a crucial role in enhancing our data visualization capabilities.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24 max-w-7xl">
          <Image
            src="/advantexe-logo.png"
            alt="Advantexe Logo"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:white-shadow"
          />
          <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              Software Engineer Intern
            </h1>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8 max-w-lg">
            During my first summer interning at Advantexe Learning Solutions, I was immersed in a hands-on learning environment where I tested various simulations to ensure their accuracy and reliability. Collaborating closely with fellow interns, I contributed to the development of a simulation project, gaining valuable experience in teamwork and problem-solving.
            </p>
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}