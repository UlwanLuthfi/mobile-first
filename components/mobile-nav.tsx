"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import VercelLogoDark from "@/public/Vercel/icon/dark/vercel-icon-dark.svg";
import VercelLogoLight from "@/public/Vercel/icon/light/vercel-icon-light.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Copyright } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ModeToggleMobile } from "./mode-toggle-mobile";

export default function MobileNav() {
  const [copyright, setCopyright] = useState("Mobile First, Inc");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleCopyrightChange = () => {
    setCopyright((prevCopyright) =>
      prevCopyright === "Mobile First, Inc"
        ? "Ulwan Luthfi"
        : "Mobile First, Inc"
    );
  };

  return (
    <nav className="fixed w-full top-0 backdrop-blur border-b md:hidden">
      <div className="flex justify-between items-center p-3">
        <Link href="/">
          {resolvedTheme === "dark" ? (
            <Image src={VercelLogoLight} alt="Vercel Logo" className="w-6" />
          ) : (
            <Image src={VercelLogoDark} alt="Vercel Logo" className="w-6" />
          )}
        </Link>

        <ModeToggleMobile />

        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle Menu</span>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader className="text-left">
              <SheetTitle>Mobile First</SheetTitle>
              <SheetDescription>
                Unleash Your Competitive Edge with Mobile-First Development!
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3">
              <Link href="/">Home</Link>
              <Link href="#why">Why</Link>
              <Link href="#tools">Tools</Link>
              <Link href="#learn">Learn</Link>
              <Link href="https://github.com/UlwanLuthfi" target="_blank">
                Github
              </Link>
            </div>
            <SheetFooter className="h-full">
              <div
                className="flex items-center justify-center space-x-1"
                onClick={() => handleCopyrightChange()}
              >
                <Copyright className="w-4 h-4" />
                <span>2024 - {copyright}.</span>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
