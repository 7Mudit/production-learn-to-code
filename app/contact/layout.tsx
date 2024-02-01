import clsx from "clsx";
import { Urbanist } from "next/font/google";
// import { PrismicPreview } from "@prismicio/next";
// import { createClient, repositoryName } from "@/prismicio";

// import Footer from "@/components/Footer";
import Navbar1 from "@/components/homePage/Navbar1";

const urbanist = Urbanist({ subsets: ["latin"] });
// import "./theme.css";
import Footer from "@/components/homePage/Footer";

// export async function generateMetadata(): Promise<Metadata> {
//   // const client = createClient();
//   // const settings = await client.getSingle("settings");

//   return {
//     // title: settings.data.meta_title,
//     // description: settings.data.meta_description,
//     // openGraph: {
//     //   images: [settings.data.og_image?.url || ""],
//     // },
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        urbanist.className,
        "relative   min-h-screen h-full dark:bg-black bg-white  gap-[50px] sm:gap-[100px] flex-col"
      )}
    >
      <Navbar1 />
      {children}
      <div className="w-11/12 mt-10 relative mx-auto">
        <Footer />
      </div>
    </div>
  );
}
