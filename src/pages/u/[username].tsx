import { Conference, Gig, User } from "@prisma/client";
import axios from "axios";
import { Moon, Sun } from "lucide-react";
import { type GetServerSidePropsContext } from "next";
import { useTheme } from "next-themes";
import { GitHubIcon } from "~/components/icons/github";
import { SEO } from "~/components/seo";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ProfileEvent } from "~/components/userpage/event";
import { ProfileInfo } from "~/components/userpage/info";
import { SSRHelpers } from "~/utils/trpc";

const Profile = ({
  data,
  url,
}: {
  data: User & {
    gigs: (Gig & { conference: Conference })[];
  };
  url: string;
}) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO isProfile>
        <meta
          property="twitter:image"
          content={`${url}/api/og/profile?username=${data.username}&image=${data.image}&events=${data.gigs.length}`}
        />
        <meta
          property="og:image"
          content={`${url}/api/og/profile?username=${data.username}&image=${data.image}&events=${data.gigs.length}`}
        />
      </SEO>
      <main className="container mt-12 grow">
        <Card>
          <CardHeader className="block flex-row items-center gap-4 sm:flex">
            {data && <ProfileInfo user={data} />}
          </CardHeader>
          {data?.bio ? (
            <CardContent>
              <h4 className="mb-2 font-semibold">Bio</h4>
              <p>{data?.bio}</p>
            </CardContent>
          ) : null}
        </Card>
        {data?.gigs?.length ? (
          <h3 className="my-8 text-xl font-bold">
            <span className="capitalize">{data?.username ?? data?.name}</span>{" "}
            has {data?.gigs.length} event
            {data?.gigs?.length > 1 && "s"} coming up:
          </h3>
        ) : null}
        <div className="mb-12 space-y-4">
          {data?.gigs.map((event) => (
            <ProfileEvent key={event.id} {...event} />
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Created using{" "}
            <a
              href="https:// imspeaking.at"
              className="underline"
              target="_blank"
            >
              imspeakingat
            </a>
            . Make your page for free.
          </span>
          <div className="flex items-center">
            <a
              aria-label="gitHub link"
              href="https://github.com/SaraVieira/imspeakingat"
              target="_blank"
            >
              <Button name="github" variant={"ghost"} size={"sm"}>
                <GitHubIcon className="mx-0" />
              </Button>
            </a>
            <Tooltip>
              <TooltipTrigger
                name="change theme"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Moon className="w-5" />
                ) : (
                  <Sun className="w-5" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p> {theme === "light" ? "Dark Mode" : "Light mode"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ username: string }>,
) {
  const username = context.params?.username!;
  await SSRHelpers.user.getByUsername.prefetch({ username });
  const user = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/trpc/user.getByUsername?batch=1&input={"0":{"json":{"username":"${username}"}}}`,
  );
  const BeUser = user?.data[0]?.result?.data?.json ?? {};
  return {
    props: {
      url: process.env.NEXTAUTH_URL,
      data: BeUser,
      trpcState: SSRHelpers.dehydrate(),
    },
  };
}
