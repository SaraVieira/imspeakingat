import { z } from "zod";
import { accountFormSchemaInside } from "~/components/userSettings/schema";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create_username: protectedProcedure
    .input(z.object({ id: z.string(), username: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: {
          id: input.id,
        },
        data: {
          username: input.username,
        },
      });
    }),
  get: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });

    return user;
  }),
  getByUsername: publicProcedure
    .input(z.object({ username: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          username: input.username,
        },
        include: {
          engaments: {
            where: {
              Conference: {
                dateStart: {
                  gte: new Date(),
                },
              },
            },
            include: { Conference: true },
          },
        },
      });

      return user;
    }),
  update: protectedProcedure
    .input(
      z.object({
        ...accountFormSchemaInside,
        location: z
          .object({
            code: z.string(),
            name: z.string(),
          })
          .optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          ...(input.username && { username: input.username }),
          ...(input.bio && { bio: input.bio }),
          ...(input.website && { website: input.website }),
          ...(input.x && { x: input.x }),
          ...(input.mastodon && { mastodon: input.mastodon }),
          ...(input.github && { github: input.github }),
          ...(input.linkedin && { linkedin: input.linkedin }),
          ...(input.threads && { threads: input.threads }),
          ...(input.location?.code &&
            input.location.name && {
              locationCode: input.location.code,
              locationName: input.location.name,
            }),
        },
      });
    }),
});
