import Bounded from "@/components/about/Bounded";
import Heading from "@/components/about/Heading";
import ContactUsForm from "@/components/contact/ContactUsForm";
import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Page = () => {
  return (
    <div className="">
      <ContactUsForm />
      <Bounded>
        <Heading as="h3" size="sm">
          Our Contact Info
        </Heading>

        <div className="ml-6 mt-8 flex flex-col gap-[50px] max-w-prose md:ml-12 md:mt-16">
          <div>
            <Heading as="h4" size="sm">
              Email
            </Heading>

            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
              <a
                href="mailto:7learntocode@gmail.com"
                className="flex flex-row gap-5 items-center justify-center"
              >
                {" "}
                <IoMdMail size={20} className="dark:text-white text-dark-500" />
                7learntocode@gmail.com
              </a>{" "}
            </div>
          </div>
          {/* <div>
            <Heading as="h4" size="sm">
              Mobile Number
            </Heading>

            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
              <a
                href="tel:8791615052"
                className="flex flex-row gap-5 items-center justify-center"
              >
                <IoCall size={20} className="dark:text-white text-dark-500" />
                +91 8791615052
              </a>{" "}
            </div>
          </div> */}
          <div>
            <Heading as="h4" size="sm">
              Operation Address
            </Heading>
            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
              <span> Kharar , Mohalli</span>{" "}
            </div>
          </div>

          {/* <div className="prose prose-lg text-slate-500 prose-invert mt-4">
            Demo
          </div> */}
        </div>
      </Bounded>
    </div>
  );
};

export default Page;
