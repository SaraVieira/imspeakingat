import { Globe } from "lucide-react";
import { type GetServerSidePropsContext } from "next";
import Link from "next/link";
import { AppLayout } from "~/components/appLayout";
import ConferenceDates from "~/components/conference/ConferenceDates";
import ConferenceFlag from "~/components/conference/ConferenceFlag";
import { SocialLinks } from "~/components/links";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
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
    return null;
  }
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
      <AppLayout>
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
              <h2 className="block text-xl font-semibold">{conference.name}</h2>
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
                        {speaker.username ? speaker.username[0] : speaker.name}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </li>
          ))}
        </ul>
      </AppLayout>
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
