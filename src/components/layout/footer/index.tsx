"use client";

import { INavItem, NAV_MENU, LOCATION, AWING_EMAIL } from "./helper";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useWindowSize } from "@/hooks/use-window-sizes";
import ScrollUpButton from "./scroll-up-button";
import { cn } from "@/lib/utils";
import { AwingRedIcon, AwingRedIconMobile, LogoAwingWhite } from "@/lib/svgExport";

export default function Footer() {
  const mediaQuery = useWindowSize();

  const renderColumn = (data: INavItem[]) => {
    return (
      <>
        {data.map((nav, idx) => (
          <React.Fragment key={idx}>
            <div className={cn([data.length > 1 && "w-[149px]", "flex flex-col gap-4 caption"])}>
              <div className="text-neutral0 ">{nav.title}</div>
              <div className="text-neutral500 flex flex-col gap-2">
                {nav.children.map((item, i) => (
                  <Link href={item.href} className="" key={idx + i}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </>
    );
  };

  const renderColumn2 = (title: string, data: string[]) => {
    return (
      <div>
        <div className={"sub-paragraph-semi-bold text-neutral500"}>{title}</div>
        <div className={"mt-4 text-neutral0 caption flex flex-col gap-4"}>
          {data.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <footer
      className={
        "w-full bg-neutral900 pt-[100px] xl:pt-[94px] pr-0 lg:pr-[100px] xl:pr-[70px] relative flex flex-col overflow-hidden xl:flex-row gap-0 xl:gap-[52.09px]"
      }
    >
      <Image
        alt={"logo awing white"}
        src={LogoAwingWhite}
        width={0}
        height={0}
        sizes={"100vw"}
        className={"w-fit h-[37px] mb-14 static xl:absolute xl:top-[94px] xl:left-[102px]"}
      />
      <div className={"xl:min-w-[570px] flex-1 w-0"}></div>
      <div className={"flex flex-col gap-0 xl:gap-[108px] flex-1"}>
        <div className="px-4 xl:px-0 flex flex-col gap-8">
          <div className={cn(["grid", mediaQuery > 1279 ? "grid-cols-3" : "grid-cols-2"])}>
            {renderColumn(NAV_MENU.slice(0, mediaQuery > 1279 ? 3 : 2))}
          </div>
          <div className={"w-full"} style={{ border: "1px solid #FFFFFF1A" }} />
          <div className={"xl:hidden flex flex-col gap-8"}>
            {renderColumn(NAV_MENU.slice(2, 3))}
            <div className={"w-full"} style={{ border: "1px solid #FFFFFF1A" }} />
          </div>
          {renderColumn2("LOCATION", LOCATION)}
          <div className={"w-full"} style={{ border: "1px solid #FFFFFF1A" }} />
          {renderColumn2("EMAIL", [AWING_EMAIL])}
        </div>
        <Image
          alt="Awing Logo"
          src={AwingRedIcon}
          width={570}
          height={644}
          className="hidden xl:flex my-0 absolute bottom-0 left-0"
        />
        <Image
          alt="Awing Logo"
          src={AwingRedIconMobile}
          width={0}
          height={0}
          sizes="100vw"
          className="my-14 size-full flex xl:hidden"
        />
        <div
          className={
            "mb-8 flex flex-col items-start xl:items-center xl:flex-row justify-normal xl:h-[44px] h-fit xl:justify-between gap-6"
          }
        >
          <div className={"text-neutral500 paragraph-regular"}>Copyright © Energy Park 2025</div>
          <ScrollUpButton />
        </div>
      </div>
    </footer>
  );
}
