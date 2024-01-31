import Bounded from "@/components/about/Bounded";
import Heading from "@/components/about/Heading";

/**
 * Component for "Experience" Slices.
 */

const Experience = ({ data, experience }: any) => {
  return (
    <Bounded>
      <Heading as="h2" size="lg">
        {experience ? "Experience" : "Education"}
      </Heading>
      {data.map((item: any, index: any) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.time_period}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className="prose prose-lg text-slate-500 prose-invert mt-4">
            {item.description}
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
