import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "~/components/home/Header";
import { DiscordIcon } from "~/components/icons/discord";
import { GitHubIcon } from "~/components/icons/github";
import { GoogleIcon } from "~/components/icons/google";
import { cn } from "~/lib/utils";

function SignIn() {
  const signins = [
    {
      label: "Discord",
      name: "discord",
      Icon: DiscordIcon,
      classes: "bg-[#5865F2] hover:bg-[#4a54cb]",
    },
    {
      label: "Google",
      name: "google",
      Icon: GoogleIcon,
      classes: "bg-red-600 hover:bg-red-700",
    },
    {
      label: "GitHub",
      name: "github",
      classes: "bg-gray-900 hover:bg-gray-800",
      Icon: GitHubIcon,
    },
  ];
  const { data } = useSession();
  const { push } = useRouter();
  useEffect(() => {
    if (data?.user) {
      push("/app");
    }
  });
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-zinc-100">
      <Header />

      <main className="flex-grow">
        <section className="from-zinc-50-100 bg-gradient-to-b to-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                <h1 className="h1">Welcome back</h1>
              </div>

              <div className="mx-auto max-w-sm space-y-3">
                {signins.map(({ Icon, name, label, classes }, index) => (
                  <div key={index} className="-mx-3 flex flex-wrap ">
                    <div className="w-full px-3">
                      <button
                        onClick={() => signIn(name, { callbackUrl: "/app" })}
                        className={cn(
                          "btn relative flex w-full items-center px-0 text-white ",
                          classes,
                        )}
                      >
                        <Icon />
                        <span className="-ml-16 flex-auto pl-16 pr-8">
                          Continue with {label}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
