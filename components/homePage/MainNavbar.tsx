// @ts-nocheck
"use client";
import React, { useEffect, useRef } from "react";

import { Inter, Noto_Sans } from "next/font/google";
// import { Lenis } from "@studio-freight/react-lenis/types";
// import Lenis from "@studio-freight/lenis";

const noto_sans2 = Noto_Sans({ weight: "900", subsets: ["latin"] });
const inter = Inter({ weight: "600", subsets: ["latin"] });

const navbarLinks = [
  // { href: "#about", title: "The Gemini Era", id: "1" },
  { href: "#growth", title: "Growth", id: "2" },
  { href: "#courses", title: "Courses", id: "3" },
  { href: "#works", title: "Works", id: "4" },
  { href: "#pricing", title: "Pricing", id: "5" },
  { href: "#use-gemini", title: "Use Gemini pro", id: "6" },
];

const MainNavbar = () => {
  // const lenis = useRef(null);
  // let animationFrameId;

  // useEffect(() => {
  //   lenis.current = new Lenis({
  //     lerp: 0.1,
  //     smooth: true,
  //     // other Lenis options
  //   });

  //   function raf(time) {
  //     lenis.current.raf(time);
  //     animationFrameId = requestAnimationFrame(raf);
  //   }

  //   animationFrameId = requestAnimationFrame(raf);

  //   return () => {
  //     cancelAnimationFrame(animationFrameId);
  //   };
  // }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`bg-white border-black border-solid border-[1px]  dark:bg-black dark:border-white
      w-[640px] px-[26px] h-[52px] rounded-[50px] sm:flex hidden flex-row sticky self-center top-[20px] z-[100]  dark:text-white items-center justify-between ${inter.className} `}
    >
      {navbarLinks.map((link) => (
        <div key={link.id}>
          <a
            key={link.id}
            href={link.href}
            className="hover:underline hover:underline-offset-[10px] hover:cursor-pointer decoration-caribbeangreen-200 text-sm"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MainNavbar;
