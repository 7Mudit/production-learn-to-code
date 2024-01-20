import React from "react";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";

const noto_sans2 = Noto_Sans({ weight: "900", subsets: ["latin"] });

interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return (
    <>
      {/* heading */}
      <div className="relative text-center mt-[150px] ">
        <h1
          className={`text-[32px] sm:text-[48px] lg:text-[52px] xl:text-[80px] ${noto_sans2.className}  font-extrabold  text-center   leading-normal`}
        >
          {heading}
        </h1>
        <div className="bg-red-black headingGradient"></div>
      </div>
    </>
  );
};

export default Heading;
