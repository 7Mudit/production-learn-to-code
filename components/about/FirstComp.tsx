"use client";
import Bounded from "@/components/about/Bounded";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Noto_Sans } from "next/font/google";
import { Shapes } from "./Shapes";
const noto_sans2 = Noto_Sans({ weight: "700", subsets: ["cyrillic"] });
export default function FirstComp() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );
      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1,0.3)",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  return (
    <Bounded
      // data-slice-type={slice.slice_type}
      // data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1 ">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={"Mudit Kapoor"}
          >
            <span className="block text-slate-800 dark:text-slate-300">
              {" "}
              {renderLetters("Mudit", "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500 ">
              {" "}
              {renderLetters("Kapoor", "last")}
            </span>
          </h1>
          <span
            // text-[12vw]  leading-[12vw]
            // bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
            className={`job-title block  bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl  ${noto_sans2.className} dark:bg-hero-dark bg-hero-light  animated-gradient`}
          >
            {"Web Developer"}
          </span>
        </div>
      </div>
    </Bounded>
  );
}
