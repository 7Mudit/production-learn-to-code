import Hero1 from "@/components/homePage/Hero1";
import MainNavbar from "@/components/homePage/MainNavbar";
import Navbar1 from "@/components/homePage/Navbar1";
import TextClipMaskEffect from "@/components/shared/TextClipMaskEffect";
import TextSection from "@/components/homePage/TextSection";
import VideoSection from "@/components/homePage/VideoSection";
import YtViewsGraph from "@/components/homePage/YtViewsGraph";
import CodeSection from "@/components/homePage/CodeSection";
// import TimelineSection from "@/components/homePage/TimelineSection";
// import Pipes from "@/components/homePage/Pipes";
import Footer from "@/components/homePage/Footer";
import CardsSection from "@/components/homePage/CardsSection";
import PricingSection from "@/components/homePage/PricingSection";
import Works from "@/components/homePage/Works";
import { GoogleGeminiEffectDemo } from "@/components/homePage/PipesAceternity";

export default function Home() {
  return (
    <div>
      <main className="flex relative h-full dark:bg-black bg-white  gap-[50px] sm:gap-[100px] flex-col">
        {/* <div
          className={`flex-1 flex  justify-center items-center} md:my-0 my-10 absolute`}
        > */}
        {/* <img
            src={"/banner4.png"}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          /> */}
        {/* gradient start */}
        {/* <div className="absolute translate-x-[-50%] left-[50%]">
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div> */}

        {/* gradient end */}
        {/* </div> */}
        <Navbar1 />
        <Hero1 />
        {/* <HeroParallaxDemo /> */}
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
          {/* <TimelineSection /> */}
          {/* Timeline Section - Section 2 */}
        </div>
        {/* This is my works section */}
        <CardsSection />
        <PricingSection />
        {/* <Pipes /> */}
        <GoogleGeminiEffectDemo />
        <div className="w-11/12 relative mx-auto">
          <Footer />
        </div>
      </main>
    </div>
  );
}
