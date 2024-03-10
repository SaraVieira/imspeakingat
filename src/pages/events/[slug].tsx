import { Globe, Moon, Sun } from "lucide-react";
import { type GetServerSidePropsContext } from "next";
import { useTheme } from "next-themes";
import Link from "next/link";
import ConferenceDates from "~/components/conference/ConferenceDates";
import ConferenceFlag from "~/components/conference/ConferenceFlag";
import { GitHubIcon } from "~/components/icons/github";
import { SocialLinks } from "~/components/links";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { api } from "~/utils/api";

const Event = ({
  slug,
  // url,
  // ssrConference: { image },
}: {
  slug: string;
  // url: string;
  // ssrConference: { image: string };
}) => {
  const { data: conference } = api.conferences.getBySlug.useQuery({ slug });

  if (!conference) {
    return (
      <div className="flex h-screen w-screen items-center justify-center text-2xl font-bold">
        Event does not exist
      </div>
    );
  }
  const { setTheme, theme } = useTheme();
  return (
    <>
      {/* <SEO isProfile>
        <meta
          property="twitter:image"
          content={`${url}/api/og/event?slug=${slug}&image=${image}`}
        />
        <meta
          property="og:image"
          content={`${url}/api/og/event?slug=${slug}&image=${image}`}
        />
      </SEO> */}
      <div className="flex min-h-screen flex-col">
        <main className="container mt-12 grow">
          <Card>
            <CardHeader className="block flex-row items-center gap-4 sm:flex">
              <Avatar className="h-32 w-32">
                {conference.image ? (
                  <AvatarImage src={conference?.image} alt={conference.name} />
                ) : null}
                <AvatarFallback>
                  {conference?.name
                    .split(" ")
                    .map((a) => a[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <h2 className="block text-xl font-semibold">
                  {conference.name}
                </h2>
                {conference?.website ? (
                  <a
                    target="_blank"
                    className=" mt-4 flex items-center gap-2 underline"
                    href={`${conference?.website}`}
                  >
                    <Globe className="mx-0 w-4" /> Website
                  </a>
                ) : null}
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <ConferenceFlag conference={conference} />
                <ConferenceDates conference={conference} />
              </h4>
              <p>{conference?.description}</p>
              <SocialLinks socials={conference} />
            </CardContent>
          </Card>
          <h2 className="mb-4 mt-8 block text-xl font-semibold">Speakers</h2>
          <ul className="flex -space-x-8">
            {conference?.speakers?.map((speaker) => (
              <li key={speaker.id}>
                <Tooltip>
                  <TooltipContent>{speaker.username}</TooltipContent>
                  <TooltipTrigger>
                    <Link href={`/u/${speaker.username}`}>
                      <Avatar className="h-24 w-24">
                        {speaker.image && (
                          <AvatarImage
                            src={speaker.image}
                            alt={speaker.username ?? speaker.name!}
                          />
                        )}
                        <AvatarFallback>
                          {speaker.username
                            ? speaker.username[0]
                            : speaker.name}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                  </TooltipTrigger>
                </Tooltip>
              </li>
            ))}
          </ul>
        </main>
        <footer className="border-t border-border py-6">
          <div className="container flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Created using{" "}
              <a
                href="https://imspeaking.at"
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
    </>
  );
};

export default Event;

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ slug: string }>,
) {
  const slug = context.params?.slug!;

  // TODO: Get this working for SEO
  // await SSRHelpers.conferences.getBySlug.prefetch({ slug });
  // const conference = await axios.get(
  //   `${process.env.NEXTAUTH_URL}/api/trpc/conferences.getBySlug?batch=1&input={"0":{"json":{"slug":"${slug}"}}}`,
  // );
  // const BeConference = conference?.data[0]?.result?.data?.json ?? {};
  return {
    props: {
      slug,
      // url: process.env.NEXTAUTH_URL,
      // ssrConference: {
      //   image: BeConference.image || "",
      // },
    },
  };
}
