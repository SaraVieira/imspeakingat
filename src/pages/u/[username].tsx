import { GetServerSidePropsContext } from "next";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ProfileEvent } from "~/components/userpage/event";
import { ProfileInfo } from "~/components/userpage/info";
import { api } from "~/utils/api";
import { SSRHelpers } from "~/utils/trpc";

const Profile = ({ username }: { username: string }) => {
  const { data } = api.user.getByUsername.useQuery({ username });

  // this will never happen but if I don't put it ts complains
  if (!data) return null;

  return (
    <div className="min-h-screen">
      <main className="container mt-12">
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
            <span className="capitalize">{data?.username || data?.name}</span>{" "}
            has {data?.engaments.length} event
            {data?.engaments?.length > 1 && "s"} coming up:
          </h3>
        ) : null}
        {data?.engaments.map((event) => <ProfileEvent {...event} />)}
      </main>
    </div>
  );
};

export default Profile;

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ username: string }>,
) {
  const username = context.params?.username as string;
  await SSRHelpers.user.getByUsername.prefetch({ username });

  return {
    props: {
      username,
      trpcState: SSRHelpers.dehydrate(),
    },
  };
}
