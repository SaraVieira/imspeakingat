import { AlertCircle } from "lucide-react";
import { GetServerSidePropsContext } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { HomeLayout } from "~/components/homeLayout";
import { DiscordIcon } from "~/components/icons/discord";
import { GitHubIcon } from "~/components/icons/github";
import { GoogleIcon } from "~/components/icons/google";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { env } from "~/env";
import { cn } from "~/lib/utils";

const errors = {
  OAuthSignin: "Error in constructing an authorization URL",
  OAuthCallback: "There is an issue with the provider info. Please try again.",
  OAuthCreateAccount: "There was a problem creating your account.",
  Callback: "There was an error while redirecting you",
  OAuthAccountNotLinked: "This email already has an account",
  SessionRequired:
    "The content of this page requires you to be signed in at all times.",
  Default: "Something went wrong",
};

const signins = {
  discord: {
    label: "Discord",
    name: "discord",
    Icon: DiscordIcon,
    classes: "bg-[#5865F2] hover:bg-[#4a54cb]",
  },
  google: {
    label: "Google",
    name: "google",
    Icon: GoogleIcon,
    classes: "bg-red-600 hover:bg-red-700",
  },

  github: {
    label: "GitHub",
    name: "github",
    classes: "bg-gray-900 hover:bg-gray-800",
    Icon: GitHubIcon,
  },
};

function SignIn({
  availableSignin,
}: {
  availableSignin: (keyof typeof signins)[];
}) {
  const { data } = useSession();
  const { push, query } = useRouter();

  useEffect(() => {
    if (data?.user) {
      push("/app");
    }
  });

  return (
    <HomeLayout>
      <section className="flex flex-col items-center">
        <h1 className="h1 pb-12">Welcome!</h1>

        {query.error ? (
          <Alert variant="destructive" className="bg- mx-auto mb-8 max-w-sm">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Sign In Error</AlertTitle>
            <AlertDescription>
              {
                // @ts-ignore
                errors[query.error || "Default"]
              }
            </AlertDescription>
          </Alert>
        ) : null}
        <div className="space-y-3 sm:w-[400px]">
          {availableSignin.map((a, index) => {
            const { Icon, name, label, classes } = signins[a];
            return (
              <button
                key={index}
                onClick={() => signIn(name, { callbackUrl: "/app" })}
                className={cn(
                  "btn relative flex w-full items-center px-0 text-white",
                  classes,
                )}
              >
                <Icon />
                <span className="-ml-16 flex-auto pl-16 pr-8">
                  Continue with {label}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </HomeLayout>
  );
}

export default SignIn;
export async function getServerSideProps() {
  return {
    props: {
      availableSignin: [
        "github",
        "discord",
        env.NODE_ENV === "development" ? "google" : "",
      ].filter((a) => a),
    },
  };
}
