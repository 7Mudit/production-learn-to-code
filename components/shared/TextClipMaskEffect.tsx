// @ts-nocheck
"use client";
import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";

export default function TextClipMaskEffect() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    let animationFrameId;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

    const animate = () => {
      if (!stickyMask.current || !container.current) {
        return 0; // Return a default value if references don't exist
      }
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.webkitMaskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const animate = () => {
  //   const maskSizeProgress = targetMaskSize * getScrollProgress();
  //   stickyMask.current.style.webkitMaskSize =
  //     (initialMaskSize + maskSizeProgress) * 100 + "%";
  //   requestAnimationFrame(animate);
  // };

  const getScrollProgress = () => {
    if (!stickyMask.current || !container.current) {
      return 0; // Return a default value if references don't exist
    }
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };
  if (isSafari) {
    return null; // Don't render the component in Safari
  }

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop preload="auto">
            <source src="/bannerVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
