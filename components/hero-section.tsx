import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
    <section className="flex flex-col mt-32 space-y-8 text-center md:px-20">
      <h1 className="text-4xl leading-none font-extrabold sm:w-[32rem] sm:mx-auto lg:w-[42rem]">
        Welcome to the Leading Destination for{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Mobile-First
        </span>{" "}
        Coding Excellence!
      </h1>

      <p className="text-lg text-muted-foreground">
        Elevate Your Competitive Edge through Strategic Implementation of
        Mobile-First Development Practices!
      </p>

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
