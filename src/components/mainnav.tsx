import Link from "next/link";

import { cn } from "../lib/utils";
import Logo from "./icons/logo";

export const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav className={cn("flex items-center ", className)} {...props}>
      <Logo className="mr-6 w-14" />
      <Link
        href="/app"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
    </nav>
  );
};
