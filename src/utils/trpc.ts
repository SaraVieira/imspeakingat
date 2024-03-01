import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { createServerSideHelpers } from "@trpc/react-query/server";

export const SSRHelpers = createServerSideHelpers({
  router: appRouter,
  ctx: {} as any,
  transformer: superjson,
});
