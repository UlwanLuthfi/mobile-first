"use client";

import { Copyright } from "lucide-react";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function SiteFooter() {
  const [copyright, setCopyright] = useState("Mobile First, Inc");

  const handleCopyrightChange = () => {
    setCopyright((prevCopyright) =>
      prevCopyright === "Mobile First, Inc"
        ? "Ulwan Luthfi"
        : "Mobile First, Inc"
    );
  };

  return (
    <footer className="p-6 mt-32 bg-black">
      <div className="flex flex-col gap-y-4">
        <span className="text-white">
          Discover the competitive advantage of building for mobile-first. Join
          our community and achieve digital success!
        </span>

        <div className="flex flex-col text-white">
          <div>Have question?</div>
          <div>
            Reach out to us at{" "}
            <span className="underline">contact@mobile-first.inc</span>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between">
        <div
          className="flex items-center space-x-1 text-white"
          onClick={() => handleCopyrightChange()}
        >
          <Copyright className="w-5 h-5" />
          <span>2024 - {copyright}.</span>
        </div>

        <div className="space-x-2">
          <Button variant="outline" size="icon">
            <GitHubLogoIcon className="w-5 h-5" />
          </Button>

          <Button variant="outline" size="icon">
            <InstagramLogoIcon className="w-5 h-5" />
          </Button>

          <Button variant="outline" size="icon">
            <DiscordLogoIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
