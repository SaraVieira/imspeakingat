import { type Conference, type Gig, GigType } from "@prisma/client";
import { isPast } from "date-fns";
import { z } from "zod";
import { slugify } from "~/lib/utils";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export type ReturnType = Gig & { conference: Conference };

export const eventsRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        type: z.enum([GigType.MC, GigType.OTHER, GigType.PANEL, GigType.TALK]),
        date: z
          .object({
            from: z.date(),
            to: z.date().optional(),
          })
          .optional(),
        location: z.any().optional(),
        confName: z.string().optional(),
        talkTitle: z.string().optional(),
        confId: z.string().optional().nullable(),
        confWebsite: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.confId && input.date) {
        const { id } = await ctx.db.conference.create({
          data: {
            slug: slugify(
              `${input.confName}-${new Date(input.date.from).getFullYear()}`,
            ),
            location: input.location,
            name: input.confName!,
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
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        type: z.enum([GigType.MC, GigType.OTHER, GigType.PANEL, GigType.TALK]),
        talkTitle: z.string().optional(),
        confId: z.string().optional().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.gig.update({
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
          conference: true,
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
      return ctx.db.gig.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const all = await ctx.db.gig.findMany({
      orderBy: {
        conference: {
          dateStart: "asc",
        },
      },
      where: { createdBy: { id: ctx.session.user.id } },
      include: {
        conference: true,
      },
    });
    const separated = all.reduce(
      (acc: any, curr: any) => {
        if (isPast(curr.conference?.dateStart as Date)) {
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
