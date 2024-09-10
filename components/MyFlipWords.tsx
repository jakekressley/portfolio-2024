import React from "react";
import { FlipWords } from "./ui/flip-words";

const MyFlipWords = () =>{
  const words = ["Software Engineer", "Student", "Innovator"];

  return (
    <div className="flex justify-center items-center mb-4 text-center w-[300px]">
      <div className="text-2xl lg:text-3xl font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}

export default MyFlipWords