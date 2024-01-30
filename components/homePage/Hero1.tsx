import React from "react";
import { Noto_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./Hero1.css";
const noto_sans2 = Noto_Sans({ weight: "700", subsets: ["cyrillic"] });
const inter = Inter({ weight: "500", subsets: ["latin"] });

const Hero1 = () => {
  return (
    <div className="dark:text-white text-black  flex px-2 sm:p-24 py-48 flex-col w-full items-center justify-center relative  ">
      {/* <div className="bg-gemini-style-gradient custom-hover-effect hidden sm:block animated-background"></div> */}
      {/* <div className="bg-muted-foreground dark:bg-gray-500 custom-hover-effect opacity-[0.15] dark:opacity-[0.35]"></div> */}
      <h1
        className={`text-[12vw] tracking-tight leading-[12vw]  ${inter.className} text-center relative`}
      >
        Welcome to
      </h1>
      <h1
        className={`text-[12vw] tracking-tight leading-[12vw]  ${noto_sans2.className} dark:bg-hero-dark bg-hero-light  animated-gradient text-center`}
      >
        <span className={`font-extrabold `}>Learn</span> To Code
      </h1>
    </div>
  );
};

export default Hero1;
