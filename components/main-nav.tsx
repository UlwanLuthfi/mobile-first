import Image from "next/image";
import Link from "next/link";
import VercelLogo from "@/public/Vercel/icon/dark/vercel-icon-dark.svg";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function MainNav() {
  return (
    <nav className="fixed w-full top-0 backdrop-blur border-b hidden md:block">
      <div className="flex justify-between items-center p-2">
        <Link href="/">
          <Image src={VercelLogo} alt="Vercel Logo" className="w-7" />
        </Link>

        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#why" className="hover:underline">
              Why
            </Link>
          </li>
          <li>
            <Link href="#tools" className="hover:underline">
              Tools
            </Link>
          </li>
          <li>
            <Link href="#learn" className="hover:underline">
              Learn
            </Link>
          </li>
          <li>
            <Link
              className={buttonVariants()}
              href="https://github.com/UlwanLuthfi"
              target="_blank"
            >
              <GitHubLogoIcon className="mr-1" /> GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
