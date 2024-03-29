"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import "./VideoSection.css";
import Heading from "./Heading";
import Image from "next/image";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const VideoSection = () => {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.7 } // Trigger when 50% of the video is in the viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  // Adjust the scale based on visibility
  const videoScale = inView ? 1.2 : 1;
  return (
    <div className="flex flex-col items-center gap-[50px] justify-center">
      {/* heading */}
      <Heading heading="Master Coding with LTC" />
      <div
        className={`text-center text-white dark:text-gray-500 ${inter.className}`}
      >
        <p className="text-pure-greys-200">
          Explore the new era of coding education,
        </p>
        <p className="text-pure-greys-200">where technology meets learning.</p>
      </div>
      <div
        ref={videoRef}
        className=" w-[50%] h-full flex items-center justify-center mt-[50px]  transition-all duration-500  overflow-hidden shadow-[10px_-5px_50px_-5px]  dark:bg-white rounded-2xl shadow-blue-200"
        style={{ transform: `scale(${videoScale})` }}
      >
        <div className="videoStylings rounded-xl">
          <Image
            src="/banner4.png" // Path to your fallback image
            alt="Fallback Image"
            width={400}
            height={150}
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
