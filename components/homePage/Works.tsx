"use client";
import Image from "next/image";
import Heading from "./Heading";
import { Noto_Sans } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaBookReader } from "react-icons/fa";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });

const courses = [
  {
    name: "Competitive Programming",
    description:
      "This course offers a deep dive into competitive programming, focusing on providing detailed solutions and step-by-step editorials from leading platforms like LeetCode, CodeChef, and Codeforces.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/courses/Dev.png",
    course_link: "/upsolving",
  },
  {
    name: "NPTEL Notes",
    description:
      "Dive into comprehensive learning resources compiled from NPTEL lectures. This course offers in-depth knowledge on various engineering and science subjects. Will include additional study materials and insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "/courses/NPTEL.png",
    course_link: "/nptel-notes",
  },
  {
    name: "Semester Notes",
    description:
      "Enhance your academic journey with our Semester Notes course. This course provides detailed study materials for various university subjects. Perfect for students looking to supplement their classroom learning.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/courses/Sem.png",
    course_link: "/semester-notes",
  },
];

const CourseCard = ({
  index,
  name,
  description,
  tags,
  image,
  course_link,
}: any) => {
  return (
    <div
      className={`duration-300 shadow-xl hover:scale-[1.05] transition-all dark:bg-black ${noto_sans2.className} border-pure-greys-100 border hover:cursor-pointer  p-5 rounded-2xl md:w-[360px] w-full`}
    >
      {/* image and github floating icon */}

      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt="project_image"
          width={"318"}
          height={"230"}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(course_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaBookReader className="w-1/2 h-1/2 object-contain" />
          </div>
        </div> */}
      </div>
      {/* second section */}
      <div className="mt-5">
        <h3 className="dark:text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-justify text-pure-greys-200 text-[14px]">
          {description}
        </p>
      </div>
      {/* third section */}
      {/* <div className="mt-4 flex flex-row flex-wrap gap-2">
        {tags.map((tag: any) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div> */}
      <Link href={`${course_link}`} className="mt-5 py-5">
        <Button
          className={`py-4 px-8 dark:bg-white ${noto_sans2.className} dark:text-black text-white bg-black w-full mt-2`}
          variant={"outline"}
        >
          Go to Course
        </Button>
      </Link>
    </div>
  );
};

const Works = () => {
  return (
    <section id="courses">
      {/* heading */}
      <Heading heading="Documentation" />

      <div className="mt-10 p-5 items-center justify-center flex flex-wrap flex-1 gap-7">
        {courses.map((course, index) => (
          <CourseCard key={`project-${index}`} index={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default Works;
