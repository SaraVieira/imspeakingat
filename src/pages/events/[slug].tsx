import axios from "axios";
import { type GetServerSidePropsContext } from "next";
import { AppLayout } from "~/components/appLayout";
import ConferenceDates from "~/components/conference/ConferenceDates";
import ConferenceFlag from "~/components/conference/ConferenceFlag";
import { SEO } from "~/components/seo";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { api } from "~/utils/api";
import { SSRHelpers } from "~/utils/trpc";

const Event = ({
  slug,
  url,
  ssrConference: { image },
}: {
  slug: string;
  url: string;
  ssrConference: { image: string };
}) => {
  const { data: conference } = api.conferences.getBySlug.useQuery({ slug });

  if (!conference) {
    return null;
  }
  // type Conference = {
  //   id: string;
  //   createdAt: Date;
  //   updatedAt: Date;
  //   slug: string;
  //   dateStart: Date;
  //   dateEnd: Date | null;
  //   location: Prisma.JsonValue;
  //   description: string | null;
  //   name: string;
  //   image: string | null;
  //   website: string | null;
  //   github: string | null;
  //   x: string | null;
  //   threads: string | null;
  //   mastodon: string | null;

  return (
    <>
      <SEO isProfile>
        <meta
          property="twitter:image"
          content={`${url}/api/og/event?slug=${slug}&image=${image}`}
        />
        <meta
          property="og:image"
          content={`${url}/api/og/event?slug=${slug}&image=${image}`}
        />
      </SEO>
      <AppLayout>
        <Card>
          <CardHeader className="block flex-row items-center gap-4 sm:flex">
            <h2 className="block text-xl font-semibold">{conference.name}</h2>
          </CardHeader>
          <CardContent>
            <h4 className="mb-2 flex items-center gap-2 font-semibold">
              <ConferenceFlag conference={conference} />
              <ConferenceDates conference={conference} />
            </h4>
            <p>{conference?.description}</p>
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
  await SSRHelpers.conferences.getBySlug.prefetch({ slug });
  const conference = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/trpc/conferences.getBySlug?batch=1&input={"0":{"json":{"slug":"${slug}"}}}`,
  );
  const BeConference = conference?.data[0]?.result?.data?.json ?? {};
  return {
    props: {
      slug,
      url: process.env.NEXTAUTH_URL,
      ssrConference: {
        image: BeConference.image || "",
      },
    },
  };
}
