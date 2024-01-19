// @ts-nocheck
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./Pipes.css";
import bg from "./bg.png";

import { Noto_Sans } from "next/font/google";
import Heading from "./Heading";
// import { Check, Copy } from "lucide-react";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import path from "path";
const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });

const lerp = (a: any, b: any, n: any) => (1 - n) * a + n * b;

const Pipes = () => {
  const svgContainerRef = useRef(null);
  const svgContainerRef2 = useRef(null);
  const totalLengths = useRef([]);
  const totalLengths2 = useRef([]);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [mirroredAnimationProgress, setMirroredAnimationProgress] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const lastScrollTop = useRef(0);

  // This function linearly interpolates between two values.
  const lerp = (a, b, n) => (1 - n) * a + n * b;

  useEffect(() => {
    // Initialize paths and their lengths.
    const paths = svgContainerRef.current.querySelectorAll(".svg-path");
    const paths2 =
      svgContainerRef2.current.querySelectorAll(".svg-path-mirrored");

    totalLengths.current = Array.from(paths).map((path) =>
      path.getTotalLength()
    );
    totalLengths2.current = Array.from(paths2).map((path) =>
      path.getTotalLength()
    );

    // Set the stroke dasharray and dashoffset for each path.
    paths.forEach((path, index) => {
      path.style.strokeDasharray = totalLengths.current[index];
      path.style.strokeDashoffset = totalLengths.current[index];
    });
    paths2.forEach((path, index) => {
      path.style.strokeDasharray = totalLengths2.current[index];
      path.style.strokeDashoffset = totalLengths2.current[index];
    });

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (
          entry.target === svgContainerRef.current ||
          entry.target === svgContainerRef2.current
        ) {
          setIsInViewport(entry.isIntersecting);
        }
      });
    };

    const observerOptions = {
      root: null, // observing with respect to the viewport
      rootMargin: "0px",
      threshold: 0.75, // adjust as needed
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(svgContainerRef.current);
    observer.observe(svgContainerRef2.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  const maxProgressIncrement = 0.5; // Adjust this value based on testing
  useEffect(() => {
    // Function to update the SVG animation based on scroll progress.
    const updateAnimation = (progress, sign, event) => {
      // event.preventDefault();
      let progressIncrement = progress * 0.04;
      progressIncrement =
        Math.sign(progressIncrement) *
        Math.min(Math.abs(progressIncrement), maxProgressIncrement);
      let targetProgress = Math.max(
        0,
        Math.min(animationProgress + progressIncrement, 1)
      );
      setAnimationProgress((prevProgress) => {
        return lerp(prevProgress, targetProgress, 0.5); // Adjust the lerp factor based on desired smoothness
      });

      // Update the stroke offset for each path based on animation progress.
      const paths = svgContainerRef.current.querySelectorAll(".svg-path");
      let svg1Visible = true;
      paths.forEach((path, index) => {
        const length = totalLengths.current[index];
        const drawLength = Math.max(0, length - length * animationProgress);
        path.style.strokeDashoffset = drawLength;
        const resistance = 0.01;
        if (drawLength > resistance) svg1Visible = false;
      });

      const mirroredPaths =
        svgContainerRef2.current.querySelectorAll(".svg-path-mirrored");
      let newMirroredProgress = progress * 0.04;
      newMirroredProgress =
        Math.sign(newMirroredProgress) *
        Math.min(Math.abs(newMirroredProgress), maxProgressIncrement);
      let targetMirroredProgress = Math.max(
        0,
        Math.min(mirroredAnimationProgress + newMirroredProgress, 1)
      );

      setMirroredAnimationProgress((prevProgress) => {
        return lerp(prevProgress, targetMirroredProgress, 0.5); // Smooth transition
      });
      mirroredPaths.forEach((path, index) => {
        const length = totalLengths2.current[index];
        const drawLength = Math.max(
          0,
          length - length * mirroredAnimationProgress
        );
        path.style.strokeDashoffset = drawLength;
      });
      // going down
      // console.log(svg1Visible);
      // if (sign == 1) {
      //   console.log("Down");
      // } else {
      //   console.log("up");
      // }
    };

    // Event listener for scroll event to update animation.
    const handleScroll = (event) => {
      if (!isInViewport) return;

      let scrollProgress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      let sign = scrollProgress > lastScrollTop.current ? 1 : -1;
      updateAnimation(sign * scrollProgress, sign, event);
      lastScrollTop.current = scrollProgress;
    };
    if (isInViewport) {
      window.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Cleanup function to remove the event listener.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationProgress, mirroredAnimationProgress, isInViewport]);
  return (
    <section id="use-gemini">
      {/* heading */}
      <Heading heading="Gemini Pro"></Heading>
      <div className="line-gradient-title__lottie js-animation relative">
        {/* <div className="absolute top-[45%] z-10 translate-x-[-50%] left-[50%]">
          <Link href={"/gemini"}>
            <Button
              className={`py-6 px-12 text-[16px] bg-white text-black rounded-full duration-300 transition-all hover:scale-105 cursor-pointer ${noto_sans2.className}`}
            >
              Use Gemini
            </Button>
          </Link>
        </div> */}

        <Image
          src={bg}
          width="1500"
          height="500"
          loading="lazy"
          alt="Line background"
        />
        <div className="svg-container" ref={svgContainerRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 3000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="__lottie_element_2">
                <rect width="3000" height="1000" x="0" y="0"></rect>
              </clipPath>
              <g id="__lottie_element_4">
                <g
                  transform="matrix(1,0,0,1,1500,498.75)"
                  opacity="1"
                  style={{
                    display: "block",
                  }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(255,255,255)"
                      fillOpacity="1"
                      d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"
                    ></path>
                  </g>
                </g>
              </g>
            </defs>
            <g clipPath="url(#__lottie_element_2)">
              <g
                transform="matrix(2,0,0,-2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(255,183,197)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-749.02001953125,-156 C-518.8740234375,-156.00799560546875 -448.5669860839844,-156.92300415039062 -357,-73.76399993896484 C-308.98614501953125,-30.073347091674805 -266.2104797363281,-13.405204772949219 -238,-4.5 C-210.9901123046875,4.2526535987854 -199.9834747314453,-2.493570566177368 -180.11532592773438,-8.230440139770508 C-154.6326446533203,-15.847797393798828 -138.1337127685547,4.950650691986084 -120,12.11364459991455 C-98.66706848144531,20.581668853759766 -83.49591064453125,5.135343074798584 -62,-9.762797355651855 C-52.57600021362305,-16.395999908447266 -43.33000183105469,-15.362000465393066 -34.17100143432617,-11.147000312805176"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,-2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(255,221,183)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-749.0089721679688,-78.00800323486328 C-587.1500244140625,-78.00700378417969 -454.6050109863281,-77.79299926757812 -357,-34.71099853515625 C-304.39178466796875,-11.488153457641602 -267.6034240722656,-1.5989795923233032 -238.40997314453125,-0.767098605632782 C-210.62037658691406,-0.023633135482668877 -199.10498046875,-11.960881233215332 -180.16490173339844,-6.321541786193848 C-161.2248077392578,-0.6822025179862976 -142.38987731933594,22.0332088470459 -120,10.239068031311035 C-96.66304779052734,-1.7847797870635986 -82.34911346435547,-20.693023681640625 -62,-13.045815467834473 C-44.981266021728516,-6.7992753982543945 -25.171762466430664,24.37186050415039 0,13.246678352355957 C9.23900032043457,9.270999908447266 16.69099998474121,3.2960000038146973 23.698999404907227,-2.1619999408721924"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(177,197,255)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-743.9130249023438,-0.023000000044703484 C-590.0460205078125,-0.02199999988079071 -452.718994140625,0.003000000026077032 -357,0.1899999976158142 C-304.03375244140625,0.2924267053604126 -263.16961669921875,6.227356910705566 -238.0447540283203,0.41890138387680054 C-212.88314819335938,-5.39139986038208 -196.53712463378906,-9.47732925415039 -180.13632202148438,0.01433925237506628 C-156.19345092773438,13.978303909301758 -142.36404418945312,18.05593490600586 -120,1.420612096786499 C-96.59003448486328,-16.006574630737305 -84.46088409423828,-21.923898696899414 -62,-2.794339179992676 C-42.133331298828125,14.167840003967285 -25.756412506103516,24.35672378540039 0,3.773237943649292 C28.143491744995117,-18.8131160736084 41.404197692871094,-21.067251205444336 64,-2.5679848194122314 C70.61100006103516,2.822000026702881 76.31900024414062,7.039999961853027 81.53399658203125,10.01099967956543"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(79,171,255)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-738.8309936523438,-78 C-520.3300170898438,-77.97000122070312 -450.50299072265625,-76.80500030517578 -357,-36.23099899291992 C-307.93377685546875,-14.936050415039062 -270.7704162597656,-3.5937278270721436 -238.07696533203125,-1.7044556140899658 C-211.99537658691406,-0.23567718267440796 -198.1049041748047,-9.960881233215332 -180.08135986328125,-8.904541969299316 C-162.0578155517578,-7.848202705383301 -141.76834106445312,15.846055030822754 -120,13.681374549865723 C-95.41304779052734,11.479987144470215 -85.50011444091797,-13.187515258789062 -62,-14.731306076049805 C-41.339263916015625,-16.20276641845703 -21.171762466430664,17.608474731445312 0,15.524831771850586 C24.084138870239258,13.466998100280762 39.92390060424805,-16.766557693481445 64,-14.596729278564453 C87.0182876586914,-12.426901817321777 98.5,10.843304634094238 120,13.8313570022583 C131.5850067138672,15.552000045776367 139.56700134277344,10.48900032043457 148.44400024414062,4.785999774932861"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(7,110,255)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-731.6229858398438,-156.0050048828125 C-523.8159790039062,-156.09800720214844 -443.94500732421875,-156.41299438476562 -357,-73.9729995727539 C-309.171142578125,-28.556808471679688 -262.4288024902344,-15.789118766784668 -238,-5.141273498535156 C-213.57174682617188,5.5065717697143555 -200.2767333984375,3.373809337615967 -180.125,-5.178255558013916 C-155.12925720214844,-15.738922119140625 -139.4239044189453,-6.112921714782715 -120,7.093877792358398 C-99.65530395507812,20.523191452026367 -88.00267791748047,17.680850982666016 -62,-3.072625160217285 C-35.99786376953125,-23.826101303100586 -22.114704132080078,-12.699945449829102 -0.24350625276565552,4.045693397521973 C24.091909408569336,22.667898178100586 40.5,16.61949348449707 64,-5.100017547607422 C87.20348358154297,-26.91490936279297 104.9168701171875,-10.052282333374023 120,0.2617291212081909 C144.87786865234375,17.075952529907227 158.17654418945312,14.463401794433594 187.125,-2.293476104736328 C205.7570037841797,-13.048999786376953 213.38400268554688,-9.041999816894531 228.26199340820312,-6.9120001792907715"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
            </g>
          </svg>
        </div>
        <div className="svg-container" ref={svgContainerRef2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 3000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="__lottie_element_2">
                <rect width="3000" height="1000" x="0" y="0"></rect>
              </clipPath>
              <g id="__lottie_element_4">
                <g
                  transform="matrix(1,0,0,1,1500,498.75)"
                  opacity="1"
                  style={{
                    display: "block",
                  }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      fill="rgb(255,255,255)"
                      fillOpacity="1"
                      d=" M0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0 C0,0 0,0 0,0z"
                    ></path>
                  </g>
                </g>
              </g>
            </defs>
            <g clipPath="url(#__lottie_element_2)">
              <g
                transform="matrix(2,0,0,-2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path-mirrored"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(255,183,197)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-749.02001953125,-156 C-518.8740234375,-156.00799560546875 -448.5669860839844,-156.92300415039062 -357,-73.76399993896484 C-308.98614501953125,-30.073347091674805 -266.2104797363281,-13.405204772949219 -238,-4.5 C-210.9901123046875,4.2526535987854 -199.9834747314453,-2.493570566177368 -180.11532592773438,-8.230440139770508 C-154.6326446533203,-15.847797393798828 -138.1337127685547,4.950650691986084 -120,12.11364459991455 C-98.66706848144531,20.581668853759766 -83.49591064453125,5.135343074798584 -62,-9.762797355651855 C-52.57600021362305,-16.395999908447266 -43.33000183105469,-15.362000465393066 -34.17100143432617,-11.147000312805176"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,-2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path-mirrored"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(255,221,183)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-749.0089721679688,-78.00800323486328 C-587.1500244140625,-78.00700378417969 -454.6050109863281,-77.79299926757812 -357,-34.71099853515625 C-304.39178466796875,-11.488153457641602 -267.6034240722656,-1.5989795923233032 -238.40997314453125,-0.767098605632782 C-210.62037658691406,-0.023633135482668877 -199.10498046875,-11.960881233215332 -180.16490173339844,-6.321541786193848 C-161.2248077392578,-0.6822025179862976 -142.38987731933594,22.0332088470459 -120,10.239068031311035 C-96.66304779052734,-1.7847797870635986 -82.34911346435547,-20.693023681640625 -62,-13.045815467834473 C-44.981266021728516,-6.7992753982543945 -25.171762466430664,24.37186050415039 0,13.246678352355957 C9.23900032043457,9.270999908447266 16.69099998474121,3.2960000038146973 23.698999404907227,-2.1619999408721924"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path-mirrored"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(177,197,255)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-743.9130249023438,-0.023000000044703484 C-590.0460205078125,-0.02199999988079071 -452.718994140625,0.003000000026077032 -357,0.1899999976158142 C-304.03375244140625,0.2924267053604126 -263.16961669921875,6.227356910705566 -238.0447540283203,0.41890138387680054 C-212.88314819335938,-5.39139986038208 -196.53712463378906,-9.47732925415039 -180.13632202148438,0.01433925237506628 C-156.19345092773438,13.978303909301758 -142.36404418945312,18.05593490600586 -120,1.420612096786499 C-96.59003448486328,-16.006574630737305 -84.46088409423828,-21.923898696899414 -62,-2.794339179992676 C-42.133331298828125,14.167840003967285 -25.756412506103516,24.35672378540039 0,3.773237943649292 C28.143491744995117,-18.8131160736084 41.404197692871094,-21.067251205444336 64,-2.5679848194122314 C70.61100006103516,2.822000026702881 76.31900024414062,7.039999961853027 81.53399658203125,10.01099967956543"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path-mirrored"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(79,171,255)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-738.8309936523438,-78 C-520.3300170898438,-77.97000122070312 -450.50299072265625,-76.80500030517578 -357,-36.23099899291992 C-307.93377685546875,-14.936050415039062 -270.7704162597656,-3.5937278270721436 -238.07696533203125,-1.7044556140899658 C-211.99537658691406,-0.23567718267440796 -198.1049041748047,-9.960881233215332 -180.08135986328125,-8.904541969299316 C-162.0578155517578,-7.848202705383301 -141.76834106445312,15.846055030822754 -120,13.681374549865723 C-95.41304779052734,11.479987144470215 -85.50011444091797,-13.187515258789062 -62,-14.731306076049805 C-41.339263916015625,-16.20276641845703 -21.171762466430664,17.608474731445312 0,15.524831771850586 C24.084138870239258,13.466998100280762 39.92390060424805,-16.766557693481445 64,-14.596729278564453 C87.0182876586914,-12.426901817321777 98.5,10.843304634094238 120,13.8313570022583 C131.5850067138672,15.552000045776367 139.56700134277344,10.48900032043457 148.44400024414062,4.785999774932861"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
              <g
                transform="matrix(2,0,0,2,1500,500)"
                opacity="1"
                style={{
                  display: "block",
                }}
              >
                <path
                  className="svg-path-mirrored"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(7,110,255)"
                  strokeOpacity="1"
                  strokeWidth="3"
                  d=" M-731.6229858398438,-156.0050048828125 C-523.8159790039062,-156.09800720214844 -443.94500732421875,-156.41299438476562 -357,-73.9729995727539 C-309.171142578125,-28.556808471679688 -262.4288024902344,-15.789118766784668 -238,-5.141273498535156 C-213.57174682617188,5.5065717697143555 -200.2767333984375,3.373809337615967 -180.125,-5.178255558013916 C-155.12925720214844,-15.738922119140625 -139.4239044189453,-6.112921714782715 -120,7.093877792358398 C-99.65530395507812,20.523191452026367 -88.00267791748047,17.680850982666016 -62,-3.072625160217285 C-35.99786376953125,-23.826101303100586 -22.114704132080078,-12.699945449829102 -0.24350625276565552,4.045693397521973 C24.091909408569336,22.667898178100586 40.5,16.61949348449707 64,-5.100017547607422 C87.20348358154297,-26.91490936279297 104.9168701171875,-10.052282333374023 120,0.2617291212081909 C144.87786865234375,17.075952529907227 158.17654418945312,14.463401794433594 187.125,-2.293476104736328 C205.7570037841797,-13.048999786376953 213.38400268554688,-9.041999816894531 228.26199340820312,-6.9120001792907715"
                ></path>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pipes;
