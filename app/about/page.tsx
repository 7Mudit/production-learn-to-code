"use client";
import Avatar from "@/components/about/Avatar";
import Bounded from "@/components/about/Bounded";
import Button from "@/components/about/Button";
import Experience from "@/components/about/Experience";
import FirstComp from "@/components/about/FirstComp";
import Heading from "@/components/about/Heading";
import TechList from "@/components/about/TechList";
import Loading from "./loading";
const ExperienceData = [
  {
    title: "Content Creator",
    time_period: "02/2023 - Present",
    institution: "University of Emerging Technologies",
    description:
      "Responsible for creating and developing courses (MERN , DSA In Python), providing one-on-one support to students. Successfully created 5 courses featuring video tutorials and documentation.",
  },
  {
    title: "Freelancer",
    time_period: "07/2023 - 09/2023",
    institution: "Codechef",
    description:
      "Authored a comprehensive Rust programming course covering 100 real-world problems with detailed solutions and in-depth explanations, catering to learners from beginners to advanced levels.",
  },
  {
    title: "React Developer",
    time_period: "06/2022 - 09/2022",
    institution: "SIMMI FOUNDATION ",
    description:
      "Designed the frontend for the organization, managed Git commits, and integrated the frontend with the backend using Python Django framework.",
  },
];

const EducationData = [
  {
    title:
      "Bachelors of Engineering (BE) in Computer Science and Engineering (CSE)",
    time_period: "05/2020 - Present",
    institution: "Chandigarh University",
    description:
      "Pursuing a degree with a focus on developing innovative and efficient solutions in software engineering. Achieved a notable GPA of 8.5, demonstrating strong academic performance and a commitment to excellence in the field of computer science.",
  },
  {
    title: "Senior Secondary Education (PCMB)",
    time_period: "03/2018 - 03/2020",
    institution: "St. Francis School",
    description:
      "Completed senior secondary education with a concentration in Physics, Chemistry, Mathematics, and Biology, securing an impressive 88.8%. Demonstrated a strong foundation in analytical skills and scientific principles.",
  },
];

const Page = () => {
  return (
    <>
      {/* <FirstComp /> */}
      <Bounded
      //   data-slice-type={slice.slice_type}
      //   data-slice-variation={slice.variation}
      >
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading
            size="xl"
            className="col-start-1 text-dark-500 dark:text-white"
          >
            {"About Me"}
          </Heading>

          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            <p className="text-dark-500 dark:text-white">
              <b>Learn to Code, founded by Mudit Kapoor</b> is a dynamic
              platform dedicated to coding education through blogs, competitive
              programming, and DSA. While we enrich the developer community with
              insightful content, our future includes unique CP contests
              providing personalized feedback. Our YouTube channel supports
              learning with tutorials on web development and contest strategies.
              Mudit&apos;s vision extends beyond current offerings, aiming to
              foster a comprehensive learning environment for coders at all
              levels.
            </p>
          </div>
          {/* <Button linkField={"/resume"} label={"Resume"} /> */}

          <Avatar
            image={"/Profile_web.jpeg"}
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          />
        </div>
      </Bounded>

      <TechList />
      <Experience experience={true} data={ExperienceData} />
      <Experience experience={false} data={EducationData} />
      {/* <div className="flex items-center justify-center dark:text-slate-200 text-dark-900">
        Credits : Prismic
      </div> */}
    </>
  );
};

export default Page;
