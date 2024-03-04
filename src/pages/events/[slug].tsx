import { AvatarFallback } from "@radix-ui/react-avatar";
import { type GetServerSidePropsContext } from "next";
import { AppLayout } from "~/components/appLayout";
import ConferenceDates from "~/components/conference/ConferenceDates";
import ConferenceFlag from "~/components/conference/ConferenceFlag";
import { SocialLinks } from "~/components/links";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
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
            {conference?.image && (
              <Avatar className="h-32 w-32">
                <AvatarImage src={conference?.image} alt={conference.name} />
                <AvatarFallback>{conference?.name}</AvatarFallback>
              </Avatar>
            )}
            <h2 className="block text-xl font-semibold">{conference.name}</h2>
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
