import { GigType } from "@prisma/client";
import { z } from "zod";

export const accountFormSchema = z
  .object({
    type: z.enum([GigType.MC, GigType.PANEL, GigType.TALK, GigType.OTHER], {
      required_error: "You need to select a type.",
    }),
    confId: z.string().nullable().optional(),
    date: z
      .object({
        from: z.date({ required_error: "A date is required." }),
        to: z.date({ required_error: "A date is required." }).optional(),
      })
      .optional(),
    location: z
      .object({
        label: z.string(),
        value: z.object({
          description: z.string(),
          place_id: z.string(),
          reference: z.string(),
          structured_formatting: z.object({
            main_text: z.string(),
          }),
          terms: z.array(
            z.object({
              offset: z.number(),
              value: z.string(),
            }),
          ),
          types: z.array(z.string()),
        }),
      })
      .optional(),
    confName: z
      .string({
        required_error: "A conference name is required.",
      })
      .optional(),
    talkTitle: z.string().optional(),
    confWebsite: z.string().optional(),
  })
  .superRefine(({ confId, ...rest }, refinementContext) => {
    if (!confId && !rest.confName) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Required when creating a new event`,
        path: ["confName"],
      });
    }
    if (!confId && !rest.location) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Required when creating a new event`,
        path: ["location"],
      });
    }
    if (!confId && !rest.date) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Required when creating a new event`,
        path: ["date"],
      });
    }
  });

export type AccountFormValues = z.infer<typeof accountFormSchema>;
