import axios from "axios";
import { Moon, Sun } from "lucide-react";
import { type GetServerSidePropsContext } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import { GitHubIcon } from "~/components/icons/github";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ProfileEvent } from "~/components/userpage/event";
import { ProfileInfo } from "~/components/userpage/info";
import { api } from "~/utils/api";
import { SSRHelpers } from "~/utils/trpc";

const Profile = ({
  username,
  url,
  ssrUser,
}: {
  username: string;
  url: string;
  ssrUser: {
    username: string;
    image: string;
    events: number;
  };
}) => {
  const { data } = api.user.getByUsername.useQuery({ username });
  const { setTheme, theme } = useTheme();
  // this will never happen but if I don't put it ts complains
  if (!data) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <meta
          property="og:image"
          content={`${url}/api/og/profile?username=${ssrUser.username}&image=${ssrUser.image}&events=${ssrUser.events}`}
        />
      </Head>
      <main className="container mt-12 grow">
        <Card>
          <CardHeader className="block flex-row items-center gap-4 sm:flex">
            <ProfileInfo user={data} />
          </CardHeader>
          <CardContent>
            <h4 className="mb-2 font-semibold">Bio</h4>
            <p>{data?.bio}</p>
          </CardContent>
        </Card>
        {data?.engaments?.length ? (
          <h3 className="my-8 text-xl font-bold">
            <span className="capitalize">{data?.username ?? data?.name}</span>{" "}
            has {data?.engaments.length} event
            {data?.engaments?.length > 1 && "s"} coming up:
          </h3>
        ) : null}
        <div className="mb-12 space-y-4">
          {data?.engaments.map((event) => (
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
              href="https://github.com/SaraVieira/imspeakingat"
              target="_blank"
            >
              <Button variant={"ghost"} size={"sm"}>
                <GitHubIcon className="mx-0" />
              </Button>
            </a>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size={"sm"}
                  variant={"ghost"}
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <Moon className="w-5" />
                  ) : (
                    <Sun className="w-5" />
                  )}
                </Button>
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
      ssrUser: {
        username: BeUser.username || BeUser.name,
        image: BeUser.image,
        events: BeUser.engaments.length,
      },
      url: process.env.NEXTAUTH_URL,
      username,
      trpcState: SSRHelpers.dehydrate(),
    },
  };
}
