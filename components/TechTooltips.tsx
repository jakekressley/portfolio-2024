"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const reelHotTakes = [
  {
    id: 1,
    name: "MongoDB",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 2,
    name: "Python",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 3,
    name: "React",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
];
const JakeTube = [
  {
    id: 1,
    name: "Docker",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 2,
    name: "Express",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 3,
    name: "Firebase",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    id: 4,
    name: "Google Cloud",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  {
    id: 5,
    name: "Next.js",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
];
const MLMovies = [
  {
    id: 1,
    name: "Docker",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 2,
    name: "NumPy",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    id: 3,
    name: "Pandas",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    id: 4,
    name: "Python",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 5,
    name: "scikitlearn",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  },
];
const focusForge = [
  {
    id: 1,
    name: "MongoDB",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 2,
    name: "Node.js",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 3,
    name: "Next.js",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
];

interface TechTooltipsProps {
  project: string;
}

const projectToArray = new Map();
projectToArray.set('Reel Hot Takes', reelHotTakes)
projectToArray.set('JakeTube', JakeTube)
projectToArray.set('Machine Learning Movie Recommender', MLMovies)
projectToArray.set('Focus Forge', focusForge)

const TechTooltips:React.FC<TechTooltipsProps> = ({project}) => {
  return (
    <div className="flex flex-row items-center justify-start w-full gap-4 mt-4">
      <AnimatedTooltip items={projectToArray.get(project)} />
    </div>
  );
}

export default TechTooltips
