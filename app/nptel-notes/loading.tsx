import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <video autoPlay muted loop>
        <source src="/loading-splash.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
