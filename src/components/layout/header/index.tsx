"use client";

import { LogoAwingBlack, LogoAwingWhite } from "@/lib/svgExport";
import Image from "next/image";
import * as React from "react";
import { MENU } from "./helper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const Header = () => {
  const { isAtTop } = useScrollDirection();

  return (
    <header
      className={cn([
        "fixed top-0 left-0 right-0 z-50 3xl:px-[100px] md:px-[70px] p-4 md:py-3",
        isAtTop ? "bg-transparent text-neutral0" : "bg-neutral0 shadow-md text-neutral700",
      ])}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[52px]">
          <Image alt="logo" src={isAtTop ? LogoAwingWhite : LogoAwingBlack} className="w-[111px] h-[28px]" />
          <div className="xl:flex hidden items-center gap-[31px]  paragraph-semi-bold">
            {MENU.map((item, i) => (
              <Link href={item.href} className="hover:border-b border-black box-border" key={i}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button className="hover:bg-transparent p-2.5" variant={"ghost"}>
            <Globe className="size-[18px]" />
            EN
          </Button>
          <Button className="rounded-none py-3 px-[29px] md:flex hidden">Contact</Button>
          <Menu className="md:hidden flex size-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
