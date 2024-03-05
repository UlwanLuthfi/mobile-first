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
import VercelLogo from "@/public/Vercel/icon/dark/vercel-icon-dark.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Copyright } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [copyright, setCopyright] = useState("Mobile First, Inc");

  const handleCopyrightChange = () => {
    setCopyright((prevCopyright) =>
      prevCopyright === "Mobile First, Inc"
        ? "Ulwan Luthfi"
        : "Mobile First, Inc"
    );
  };

  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <Image src={VercelLogo} alt="Vercel Logo" className="w-7" />
      </Link>

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
            <Link href="#">Home</Link>
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
    </nav>
  );
}
