import Link from "next/link";
import { GitHubIcon } from "../icons/github";
import { XIcon } from "../icons/x";

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100  ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="py-4 pt-24 md:flex md:items-center md:justify-between md:py-8">
          <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
            <li>
              <Link
                href="#"
                className="hover:bg-white-100 flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-600 shadow transition duration-150 ease-in-out hover:text-zinc-900"
                aria-label="Twitter"
              >
                <XIcon className="mx-0 h-4 w-4 fill-current" />
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="https://github.com/SaraVieira/imspeakingat/"
                className="hover:bg-white-100 flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-600 shadow transition duration-150 ease-in-out hover:text-zinc-900"
                aria-label="Github"
              >
                <GitHubIcon className="mx-0 h-4 w-4 fill-current" />
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="mr-4 text-sm text-zinc-600">
            Made by{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://cruip.com/"
            >
              OUR NAMES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
