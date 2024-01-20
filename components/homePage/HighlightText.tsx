import React from "react";
import { Noto_Sans } from "next/font/google";
const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const HighlightText = ({ text }: any) => {
  return (
    <span
      className={`${noto_sans2.className} bg-clip-text dark:bg-text-light-gradient bg-text-light-gradient-dark  text-transparent text-[42px] sm:text-[100px]font-bold`}
    >
      {text}
    </span>
  );
};

export default HighlightText;
