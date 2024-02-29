import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../icons/logo";
import { useSession } from "next-auth/react";
import { UserNav } from "../usermenu";

function Header() {
  const [top, setTop] = useState(true);
  const { data } = useSession();
  console.log(data);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${!top && "bg-white shadow-lg backdrop-blur-sm"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 flex-shrink-0">
            {/* Logo */}
            <Link href="/" className="block">
              <Logo className="h-11 w-12" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            {data?.user ? (
              <div className="flex flex-grow flex-wrap items-center justify-end">
                <UserNav />
              </div>
            ) : (
              <ul className="flex flex-grow flex-wrap items-center justify-end">
                <li>
                  <Link
                    href="/signin"
                    className="flex items-center px-5 py-3 font-medium text-zinc-600 transition duration-150 ease-in-out hover:text-zinc-900"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm ml-3 bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
                  >
                    <span>Sign up</span>
                    <svg
                      className="-mr-1 ml-2 h-3 w-3 flex-shrink-0 fill-current text-zinc-400"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
