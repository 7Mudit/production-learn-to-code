import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar1 from "@/components/homePage/Navbar1";
import "../globals.css";
import Footer from "@/components/homePage/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Learn To Code - Programming Help, Freelancing, and Developer Resources",
  description:
    "Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide.",
  manifest: "/site.webmanifest",
  publisher: "Mudit Kapoor",
  openGraph: {
    title:
      "Learn To Code - Programming Help, Freelancing, and Developer Resources",
    description:
      "Join our community-driven platform for programming solutions, freelancing services, developer documentation, and AI-powered Q&A. Collaborate and learn with developers worldwide.",
    images: "https://thelearntocode.com/tryLogo.png",
    type: "website",
    url: "https://thelearntocode.com/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${urbanist.className} dark:bg-black bg-light-900`}>
      <Navbar1 />
      {children}
      <div className="p-5">
        <Footer />
      </div>
    </div>
  );
}
