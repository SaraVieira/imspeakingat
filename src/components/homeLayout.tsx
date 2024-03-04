import { useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "./icons/logo";
import { UserNav } from "./usermenu";
import { Button } from "./ui/button";
import { SEO } from "./seo";
import { ArrowRight } from "lucide-react";
import { GitHubIcon } from "./icons/github";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { data, status } = useSession();
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="block">
            <Logo className="w-12" />
          </Link>

          {status !== "loading" && (
            <nav>
              {data?.user ? (
                <div className="flex flex-wrap items-center justify-end">
                  <UserNav />
                </div>
              ) : (
                <ul className="flex items-center justify-end gap-4">
                  <li>
                    <Button variant={"outline"}>
                      <Link href="/signin">Sign in</Link>
                    </Button>
                  </li>
                  <li>
                    <Link href="/signin">
                      <Button className="flex items-center gap-2">
                        Sign up
                        <ArrowRight className="w-4" />
                      </Button>
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          )}
        </div>
      </header>
      <SEO />
      <main className="mx-auto flex flex-grow flex-col items-center justify-center text-foreground">
        {children}
      </main>

      <footer className="border-t border-zinc-800  text-xs text-muted-foreground sm:text-sm">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <span>
                Made by{" "}
                <a
                  className="text-orange-600 hover:underline"
                  href="https://github.com/SaraVieira"
                >
                  SaraVieira
                </a>{" "}
                &{" "}
                <a
                  className="text-orange-600 hover:underline"
                  href="https://github.com/hola-soy-milk"
                >
                  hola-soy-milk
                </a>
              </span>
              /
              <span>
                <Link href={"/privacy-policy"}>Privacy policy</Link>
              </span>
            </div>
            <ul className="flex gap-4">
              {/* <li>
              <Link href="#" aria-label="Twitter">
                <XIcon className="mx-0 h-4 w-4 fill-current text-zinc-100 transition hover:scale-110" />
              </Link>
            </li> */}
              <li>
                <Link
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
};
