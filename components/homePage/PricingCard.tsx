"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { FiCheck } from "react-icons/fi";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import Link from "next/link";
const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const noto_sans2_pricing = Noto_Sans({ weight: "800", subsets: ["cyrillic"] });
const interBold = Inter({ weight: "800", subsets: ["latin"] });
const interMedium = Inter({ weight: "500", subsets: ["latin"] });
const interLight = Inter({ weight: "200", subsets: ["latin"] });

interface Props {
  name: string;
  id: number;
  paymentLink: string;
  description: string;
  fakePrice: string;
  discount: string;
  price: string;
  revisions: string;
  features: string[];
}

const PricingCard = ({
  name,
  description,
  discount,
  fakePrice,
  features,
  price,
  revisions,
  id,
  paymentLink,
}: Props) => {
  return (
    <div
      className={`w-[360px] px-8 py-10 items-center  justify-center flex flex-col gap-[10px] ${
        id == 2 ? "border-[#fc5185]" : "border-pure-greys-200"
      } h-full border-[1px]  text-white rounded-md transition-all relative duration-300 hover:scale-105`}
    >
      {id === 2 && (
        <div
          className={` duration-300 transition-all hover:scale-110 ${
            interBold.className
          } text-white self-stretch ${
            id === 2 ? "bg-[#fc5185]" : "bg-[#5025d1]"
          } text-[18px] leading-[36px] text-center px-4 py-2 absolute -top-5 rounded-full left-[50%] translate-x-[-50%]`}
        >
          Most Popular
        </div>
      )}
      <h1
        className={`text-[24px] ${noto_sans2_pricing.className} leading-[32px] font-[700] text-black dark:text-white`}
      >
        {name}
      </h1>
      <p
        className={`${interMedium.className} text-pure-greys-400 text-center  text-[14px] leading-[24px]`}
      >
        {description}
      </p>
      <div className="flex items-center justify-center flex-row gap-4">
        <p
          className={`line-through ${interLight.className} text-richblack-300`}
        >
          {fakePrice}
        </p>
        <Badge
          variant="outline"
          className={`bg-[#ebe4ff] px-4 py-2 ${
            id === 2 ? "text-[#fc5185]" : "text-[#5025d1]"
          } border-none  ${interBold.className}`}
        >
          SAVE {discount}
        </Badge>
      </div>
      <h1
        className={`text-[36px] text-dark-500 dark:text-light-850 ${interBold.className} leading-[56px]`}
      >
        <sub className="">₹</sub>
        {price}
      </h1>
      <p
        className={`${
          interMedium.className
        } text-[#8c85ff] text-center  text-[18px] ${
          id === 2 ? "text-[#fc5185]" : "text-[#5025d1]"
        } leading-[24px]`}
      >
        +{revisions} revisions are free
      </p>
      <Link
        href={paymentLink}
        className="items-center justify-center  flex w-full"
      >
        <Button
          variant={"outline"}
          className={`bg-[#673de6] w-full duration-300 transition-all hover:scale-110 ${
            interBold.className
          } text-white self-stretch ${
            id === 2 ? "bg-[#fc5185]" : "bg-[#5025d1]"
          } text-[16px] leading-[24px]`}
        >
          Buy Now
        </Button>
      </Link>

      <div className="h-[2px] my-[30px] bg-white w-full" />
      <h5
        className={`text-[18px] self-start ${interBold.className} leading-[24px] dark:text-white text-black font-[700]`}
      >
        Top Features -
      </h5>
      <div className="flex flex-col gap-4 items-start">
        {features.map((feature, index) => (
          <div
            className="flex flex-row items-center justify-center  gap-2"
            key={index}
          >
            <FiCheck className={`text-green-700 w-4 h-4`} />
            <p
              className={`w-full flex text-dark-200 dark:text-light-800 ${interMedium.className}`}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
