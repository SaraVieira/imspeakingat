import { EngamentType } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const engamentRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        type: z.enum([
          EngamentType.MC,
          EngamentType.OTHER,
          EngamentType.PANEL,
          EngamentType.TALK,
        ]),
        date: z.object({
          from: z.date(),
          to: z.date().optional(),
        }),
        location: z.any(),
        confName: z.string(),
        talkTitle: z.string().optional(),
        confId: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.confId) {
        const { id } = await ctx.db.conference.create({
          data: {
            location: input.location,
            name: input.confName,
            dateStart: input.date.from,
            dateEnd: input.date.to,
          },
        });
        return ctx.db.engament.create({
          data: {
            talk: input.talkTitle || "",
            type: input.type,
            createdById: ctx.session.user.id,
            conferenceId: id,
          },
          include: {
            Conference: true,
          },
        });
      }
      return ctx.db.engament.create({
        data: {
          talk: input.talkTitle || "",
          type: input.type,
          createdById: ctx.session.user.id,
          conferenceId: input.confId,
        },
        include: {
          Conference: true,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.engament.findMany({
      orderBy: {
        Conference: {
          dateStart: "desc",
        },
      },
      where: { createdBy: { id: ctx.session.user.id } },
      include: {
        Conference: true,
      },
    });
  }),
});
