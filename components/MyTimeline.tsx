import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline"

export function MyTimeline() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:items-center lg:gap-24 max-w-7xl">
          <Image
            src="/bny-logo.png"
            alt="BNY Logo"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:white-shadow"
          />
          <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              Software Engineer Intern
            </h1>
            <ul className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8 max-w-lg">
              <li>Constructed a network of RAG AI agents, coordinating agent communication with Python to classify legal documents and extract investor and trade data with 90% accuracy, lowering document review time and boosting operational efficiency by 40%.</li>
              <br />
              <li>Designed a RESTful API with Spring Boot to integrate the AI system into an internal Angular-based application, enabling real-time delivery of structured JSON data and improving access to key insights for 30+ internal users.</li>
              <br />
              <li>Built an automated fund name–matching function using Levenshtein distance to map AI-extracted fund names to fund IDs in a 10,000+ row Excel dataset, eliminating manual lookups and reducing processing time by over 50%.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:items-center lg:gap-24 max-w-7xl">
          <Image
            src="/advantexe-logo.png"
            alt="Advantexe Logo"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:white-shadow"
          />
          <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              Web Application Developer Intern
            </h1>
            <ul className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8 max-w-lg">
              <li>Engineered key components of business acumen simulations, including interactive dashboards and decision-making workflows, contributing to simulation design and delivering React and Bootstrap interfaces that enhanced participant engagement and learning outcomes.</li>
              <br />
              <li>Researched and recommended the optimal charting API for simulations, cutting implementation time by 30% and improving dashboard performance, enabling participants to access actionable insights for informed decisions.</li>
              <br />
              <li>Validated and fine-tuned 10+ existing business acumen simulations through black box testing, ensuring accuracy and reliability to provide participants with a consistent, high-quality learning experience.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:items-center lg:gap-24 max-w-7xl">
          <Image
            src="/advantexe-logo.png"
            alt="Advantexe Logo"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:white-shadow"
          />
          <div>
            <h1 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
              Web Application Developer Intern
            </h1>
            <ul className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8 max-w-lg">
              <li>Implemented interactive business acumen simulations as part of a cross-functional team, using React and Bootstrap to convert static wireframes into responsive, high-fidelity interfaces deployed in production.</li>
              <br />
              <li>Transformed backend customer data into clear, client-facing visual formats, improving data accessibility and supporting informed stakeholder reviews.</li>
            </ul>
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