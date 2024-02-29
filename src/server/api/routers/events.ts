import { type Conference, type Engament, EngamentType } from "@prisma/client";
import { isPast } from "date-fns";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export type ReturnType = Engament & { Conference: Conference };

export const eventsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        type: z.enum([
          EngamentType.MC,
          EngamentType.OTHER,
          EngamentType.PANEL,
          EngamentType.TALK,
        ]),
        date: z
          .object({
            from: z.date(),
            to: z.date().optional(),
          })
          .optional(),
        location: z.any().optional(),
        confName: z.string().optional(),
        talkTitle: z.string().optional(),
        confId: z.string().optional(),
        confWebsite: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.confId && input.date) {
        const { id } = await ctx.db.conference.create({
          data: {
            location: input.location,
            name: input.confName!,
            dateStart: input.date.from,
            dateEnd: input.date.to,
            website: input.confWebsite,
          },
        });
        return ctx.db.engament.create({
          data: {
            talk: input.talkTitle ?? "",
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
          talk: input.talkTitle ?? "",
          type: input.type,
          createdById: ctx.session.user.id,
          conferenceId: input.confId,
        },
        include: {
          Conference: true,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        type: z.enum([
          EngamentType.MC,
          EngamentType.OTHER,
          EngamentType.PANEL,
          EngamentType.TALK,
        ]),
        talkTitle: z.string().optional(),
        confId: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.engament.update({
        where: {
          id: input.id,
        },
        data: {
          talk: input.talkTitle ?? "",
          type: input.type,
          createdById: ctx.session.user.id,
          conferenceId: input.confId,
        },
        include: {
          Conference: true,
        },
      });
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.engament.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const all = await ctx.db.engament.findMany({
      orderBy: {
        Conference: {
          dateStart: "asc",
        },
      },
      where: { createdBy: { id: ctx.session.user.id } },
      include: {
        Conference: true,
      },
    });
    const separated = all.reduce(
      (acc: any, curr: any) => {
        if (isPast(curr.Conference?.dateStart as Date)) {
          acc.past = [...acc.past, curr];
        } else {
          acc.future = [...acc.future, curr];
        }

        return acc;
      },
      { past: [], future: [] },
    ) as unknown as { past: ReturnType[]; future: ReturnType[] };
    return separated;
  }),
});
