import { eventsRouter } from "~/server/api/routers/events";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { conferencesRouter } from "./routers/conferences";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  events: eventsRouter,
  user: userRouter,
  conferences: conferencesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
