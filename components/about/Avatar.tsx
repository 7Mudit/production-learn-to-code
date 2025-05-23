"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { ImageField } from "@prismicio/client";
// import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";

export default function Avatar({
  image,
  className,
}: {
  image: any;
  className?: string;
}) {
  const component = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: prefersReducedMotion ? 0 : 1.3,
          ease: "power3.inOut",
        }
      );

      window.onmousemove = (e) => {
        if (!component.current) return; // no component, no animation!
        const componentRect = (
          component.current as HTMLElement
        ).getBoundingClientRect();
        const componentCenterX = componentRect.left + componentRect.width / 2;

        let componentPercent = {
          x: (e.clientX - componentCenterX) / componentRect.width / 2,
        };

        let distFromCenterX = 1 - Math.abs(componentPercent.x);

        gsap
          .timeline({
            defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
          })
          .to(
            ".avatar",
            {
              rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
              duration: 0.5,
            },
            0
          )
          .to(
            ".highlight",
            {
              opacity: distFromCenterX - 0.7,
              x: -10 + 20 * componentPercent.x,
              duration: 0.5,
            },
            0
          );
      };
    }, component);
    return () => {
      ctx.revert();
      // Ensure all GSAP animations and ScrollTrigger instances are properly killed
      gsap.killTweensOf(".avatar");
      gsap.killTweensOf(".highlight");
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div
        className="avatar aspect-auto  overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        <Image
          // loader={imgixLoader}
          src={image}
          alt="avatar-image"
          width={500}
          height={500}
          className="avatar-image h-full w-full object-cover"
          //   imgixParams={{ q: 90 }}
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}
