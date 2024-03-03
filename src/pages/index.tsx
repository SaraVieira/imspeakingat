import { useEffect } from "react";
import Header from "~/components/home/Header";
import HeroHome from "~/components/home/HeroHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { SEO } from "~/components/seo";
import Link from "next/link";
import { XIcon } from "~/components/icons/x";
import { GitHubIcon } from "~/components/icons/github";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <SEO />
      <main className="flex-grow text-zinc-900">
        <HeroHome />
      </main>

      <footer className="border-t border-zinc-800 ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
          <div className="py-4 pt-24 md:flex md:items-center md:justify-between md:py-8">
            <div className="flex gap-4 text-sm text-zinc-600">
              <span>
                Made by{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://cruip.com/"
                >
                  OUR NAMES
                </a>
              </span>
              /
              <span>
                <Link href={"/privacy-policy"}>Privacy policy</Link>
              </span>
            </div>
            <ul className="flex gap-4">
              <li>
                <Link href="#" aria-label="Twitter">
                  <XIcon className="mx-0 h-4 w-4 fill-current text-zinc-100 transition hover:scale-110" />
                </Link>
              </li>
              <li>
                <Link
                  className="relative "
                  href="https://github.com/SaraVieira/imspeakingat/"
                  aria-label="Github"
                >
                  <GitHubIcon className="hover:scale-120 mx-0 h-4 w-4 fill-current text-zinc-100 transition" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
