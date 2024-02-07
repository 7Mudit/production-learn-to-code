"use client";
import styles from "./page.module.scss";
import Card from "./Card/index";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import Heading from "./Heading";
import { projects } from "./data";
import Lenis from "@studio-freight/lenis";
import toast from "react-hot-toast";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isSafari) {
      const lenis = new Lenis();

      const raf = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }
  });

  return (
    <section id="works">
      {/* heading */}
      <Heading heading="Some of my Works" />

      <main ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
}
