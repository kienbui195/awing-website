"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "@/lib/svgExport";

const ScrollUpButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className={
        "flex items-center h-6 justify-between bg-transparent hover:bg-transparent p-0 text-neutral500 paragraph-regular font-normal gap-2.5 w-fit"
      }
      onClick={handleClick}
    >
      <Image
        alt={"arrow up"}
        src={ArrowUp}
        width={0}
        height={0}
        sizes={"100vw"}
        className={"size-5"}
      />
      <p>Back To Top</p>
    </Button>
  );
};

export default ScrollUpButton;
