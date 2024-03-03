import { z } from 'zod';
import {
  createTRPCRouter,
  protectedProcedure,
} from '~/server/api/trpc';

import {
  type Conference,
  type Gig,
  GigType,
} from '@prisma/client';

export type ReturnType = Gig & { Conference: Conference };

export const conferencesRouter = createTRPCRouter({
  getBySlug: protectedProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.conference.findUnique({
        where: {
          slug: input.slug,
        },
      });
    }),
  get: protectedProcedure
    .input(z.object({ limit: z.number().optional() }).optional())
    .query(({ input, ctx }) => {
      return ctx.db.conference.findMany({
        select: {
          id: true,
          name: true,
          dateStart: true,
          dateEnd: true,
          location: true,
          website: true,
        },
        orderBy: {
          name: "asc",
        },
        where: {
          dateStart: {
            gte: new Date(),
          },
        },
        ...(input?.limit && { take: input?.limit }),
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        type: z.enum([GigType.MC, GigType.OTHER, GigType.PANEL, GigType.TALK]),
        date: z.object({
          from: z.date(),
          to: z.date().optional(),
        }),
        location: z.any(),
        confName: z.string(),
        talkTitle: z.string().optional(),
        confId: z.string().optional(),
        confWebsite: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.confId) {
        const { id } = await ctx.db.conference.create({
          data: {
            slug: `${input.confName}-${new Date(input.date.from).getFullYear()}`,
            location: input.location,
            name: input.confName,
            dateStart: input.date.from,
            dateEnd: input.date.to,
            website: input.confWebsite,
          },
        });
        return ctx.db.gig.create({
          data: {
            talk: input.talkTitle ?? "",
            type: input.type,
            createdById: ctx.session.user.id,
            conferenceId: id,
          },
          include: {
            conference: true,
          },
        });
      }
      return ctx.db.gig.create({
        data: {
          talk: input.talkTitle ?? "",
          type: input.type,
          createdById: ctx.session.user.id,
          conferenceId: input.confId,
        },
        include: {
          conference: true,
        },
      });
    }),
});
