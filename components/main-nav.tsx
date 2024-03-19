"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import VercelLogoDark from "@/public/Vercel/icon/dark/vercel-icon-dark.svg";
import VercelLogoLight from "@/public/Vercel/icon/light/vercel-icon-light.svg";
import { ModeToggle } from "./mode-toggle";
import { useEffect, useState } from "react";

export default function MainNav() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed w-full top-0 backdrop-blur border-b hidden md:block lg:px-20">
      <div className="flex justify-between items-center p-3">
        <Link href="/">
          {resolvedTheme === "dark" ? (
            <Image src={VercelLogoLight} alt="Vercel Logo" className="w-6" />
          ) : (
            <Image src={VercelLogoDark} alt="Vercel Logo" className="w-6" />
          )}
        </Link>

        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="font-medium hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#why" className="font-medium hover:underline">
              Why
            </Link>
          </li>
          <li>
            <Link href="#tools" className="font-medium hover:underline">
              Tools
            </Link>
          </li>
          <li>
            <Link href="#learn" className="font-medium hover:underline">
              Learn
            </Link>
          </li>
          <li className="space-x-1">
            <Link
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href="https://github.com/UlwanLuthfi"
              target="_blank"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </Link>

            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
