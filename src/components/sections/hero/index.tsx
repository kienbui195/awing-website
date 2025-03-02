import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const Hero = (data: any) => {
  const bgImage = data.background_image.data
    ? `${process.env.NEXT_PUBLIC_BE_BASE_URL}${data.background_image.data.attributes.url}`
    : "";

  return (
    <section className="w-full h-[860px] bg-neutral0 relative">
      {bgImage !== "" && (
        <Image alt="bg-image" src={bgImage} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" />
      )}
      <div className="absolute md:left-[70px] left-[15px] 3xl:left-[100px] bottom-[15px] md:bottom-[70px] max-w-full md:max-w-[800px] flex flex-col gap-14 md:right-auto right-[15px] items-start !text-neutral0">
        <div className="flex flex-col gap-5">
          <h1 className="heading-2 md:large-heading">{data.heading}</h1>
          <p className="caption md:heading-4">{data.desc}</p>
        </div>
        <div className="flex gap-[18px] md:flex-row flex-col w-full">
          <Button className="hover:bg-brand-color bg-brand-color flex items-center rounded-none w-full md:w-[250px] h-[82px] justify-between p-5 heading-5">
            Our platform
            <ArrowRight className="size-[42px]" />
          </Button>
          <Button className="hover:bg-transparent bg-transparent border border-neutral0 flex items-center rounded-none w-full md:w-[250px] h-[82px] justify-between p-5 heading-5">
            Talk to us
            <MessageSquare className="size-[42px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
