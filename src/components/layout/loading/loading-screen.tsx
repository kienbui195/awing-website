import { AwingRedIconMobile } from "@/lib/svgExport";
import Image from "next/image";
import * as React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center bg-black fixed top-0 left-0 right-0 bottom-0 z-50">
      <Image alt="logo" src={AwingRedIconMobile} className="object-cover size-72" />
    </div>
  );
};

export default LoadingScreen;
