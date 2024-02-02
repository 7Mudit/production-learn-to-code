import React from "react";

import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import PricingCard from "./PricingCard";
import Heading from "./Heading";
import Link from "next/link";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

const PricingData = [
  {
    id: 1,
    name: "Starter Plan",
    description: "Ideal for small businesses or personal websites",
    fakePrice: "₹50,000.00",
    discount: "50%",
    price: "25,000.00",
    revisions: "2",
    features: [
      "Custom Website Design",
      "Responsive Design for Mobile Devices",
      "Basic SEO Setup",
      "5 Pages (e.g., Home, About, Services, Blog, Contact)",
      "Social Media Integration",
      "Basic Security Setup",
      "1 Month of Maintenance and Support",
    ],
  },
  {
    id: 2,
    name: "Business Plan",
    description: "Optimized for growing businesses and eCommerce",
    fakePrice: "₹1,20,000.00",
    discount: "50%",
    price: "60,000.00",
    revisions: "10",
    features: [
      "Advanced Custom Website Design",
      "E-commerce Functionality (up to 50 products)",
      "Advanced SEO Optimization",
      "10 Pages Including a Blog Setup",
      "Social Media Integration and Basic Marketing Tools",
      "Enhanced Security Features",
      "3 Months of Maintenance and Support",
    ],
  },
  {
    id: 3,
    name: "Enterprise Plan",
    description: "Comprehensive solution for large-scale businesses",
    fakePrice: "₹2,00,000.00",
    discount: "50%",
    price: "1,00,000.00",
    revisions: "Unlimited",
    features: [
      "Premium Custom Design with Interactive Elements",
      "Advanced E-commerce Solutions (Unlimited Products)",
      "Complete SEO and Marketing Suite",
      "Unlimited Pages and Content Management",
      "Integrated CRM and Payment Solutions",
      "Top-Tier Security and Data Handling",
      "1 Year of Comprehensive Maintenance and Support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing">
      {/* heading */}
      <Heading heading="Want a Website?" />

      <main className="w-full md:w-11/12 pt-[100px] flex-wrap items-center px-5  md:items-start justify-center flex-1  mx-auto flex flex-row gap-[50px] ">
        {PricingData.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </main>
      <div className="w-full text-center mt-[50px]">
        <Link
          href="/refund-policy"
          className="text-[26px] text-pretty hover:underline transition-all duration-300 underline-offset-8 text-[#8c85ff] font-extrabold"
        >
          Refund Terms
        </Link>
      </div>
    </section>
  );
};

export default PricingSection;
