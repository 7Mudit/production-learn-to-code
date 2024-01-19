import Hero1 from "@/components/homePage/Hero1";
import MainNavbar from "@/components/homePage/MainNavbar";
import Navbar1 from "@/components/homePage/Navbar1";
import TextClipMaskEffect from "@/components/shared/TextClipMaskEffect";
import TextSection from "@/components/homePage/TextSection";
import VideoSection from "@/components/homePage/VideoSection";
import YtViewsGraph from "@/components/homePage/YtViewsGraph";
import CodeSection from "@/components/homePage/CodeSection";
import TimelineSection from "@/components/homePage/TimelineSection";
import Pipes from "@/components/homePage/Pipes";
import Footer from "@/components/homePage/Footer";
import CardsSection from "@/components/homePage/CardsSection";
import PricingSection from "@/components/homePage/PricingSection";
import Works from "@/components/homePage/Works";

export default function Home() {
  return (
    <div>
      <main
        className="flex h-full bg-black text-white gap-[50px] 
                    sm:gap-[100px] flex-col"
      >
        <Navbar1 active={true} />
        <Hero1 />
        <MainNavbar />
        <TextClipMaskEffect />
        {/* <Character paragraph={paragraph} /> */}
        {/* <div className="h-[50vh]"></div> */}
        <TextSection />
        <VideoSection />
        <YtViewsGraph />
        <div className="max-w-maxContent  relative mx-auto">
          <CodeSection />
          {/* <ExploreMore /> */}
          {/*This is my Courses Sections */}
          <Works />
          <TimelineSection />
          {/* Timeline Section - Section 2 */}
        </div>
        {/* This is my works section */}
        <CardsSection />
        <PricingSection />
        <Pipes />
        <div className="w-11/12 relative mx-auto">
          <Footer />
        </div>
      </main>
    </div>
  );
}
