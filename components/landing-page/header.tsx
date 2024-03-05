import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Navbar from "./sidebar";

export default function Header() {
  return (
    <header className="flex flex-col">
      <Navbar />

      <div className="flex flex-col space-y-8 text-center">
        <h1 className="mx-2 mt-32 text-4xl leading-none font-extrabold">
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
          <Button>Get Started</Button>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://github.com/UlwanLuthfi"
            target="_blank"
          >
            <GitHubLogoIcon className="mr-1" /> GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
