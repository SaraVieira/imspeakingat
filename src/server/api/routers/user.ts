import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

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

  //   getLatest: protectedProcedure.query(({ ctx }) => {
  //     return ctx.db.engament.findFirst({
  //       orderBy: { createdAt: "desc" },
  //       where: { createdBy: { id: ctx.session.user.id } },
  //     });
  //   }),
});
