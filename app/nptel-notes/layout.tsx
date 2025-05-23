import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar1 from "@/components/homePage/Navbar1";
import "../globals.css";
import Footer from "@/components/homePage/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn To Code",
  description:
    "A community driven platform for asking and answering programming questions. Get help and share knowledge and collaborate with developers from around the world",
  // icons: {
  //   icon: "/assets/images/site-logo.svg",
  // },
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
