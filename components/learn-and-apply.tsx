import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function LearnAndApply() {
  return (
    <section id="learn" className="space-y-4 pt-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight">
          Learn, Apply, and Grow With Us!
        </h2>
        <p className="text-muted-foreground">
          Start your journey towards mastering mobile-first coding today. Join
          our community of learners, apply your knowledge, and watch your skills
          grow exponentially!
        </p>
      </div>

      <div className="flex justify-center space-x-2">
        <Button size="lg">Get Started</Button>
        <Link
          className={buttonVariants({ variant: "outline", size: "lg" })}
          href="https://github.com/UlwanLuthfi"
          target="_blank"
        >
          <GitHubLogoIcon className="mr-1" /> GitHub
        </Link>
      </div>
    </section>
  );
}
