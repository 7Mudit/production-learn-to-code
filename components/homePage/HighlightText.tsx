import React from "react";
import { Noto_Sans } from "next/font/google";
const noto_sans2 = Noto_Sans({ weight: "900", subsets: ["cyrillic"] });
const HighlightText = ({ text }: any) => {
  return (
    <span
      className={`${noto_sans2.className} bg-clip-text dark:bg-text-light-gradient bg-standard text-transparent  font-bold`}
    >
      {text}
    </span>
  );
};

export default HighlightText;
