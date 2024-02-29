import { EngamentType } from "@prisma/client";
import { z } from "zod";

export const accountFormSchema = z.object({
  type: z.enum(
    [
      EngamentType.MC,
      EngamentType.PANEL,
      EngamentType.TALK,
      EngamentType.OTHER,
    ],
    {
      required_error: "You need to select a type.",
    },
  ),
  confId: z.string().optional(),
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
        // https://www.google.com/maps/search/?api=1&query=${value.description}=${value.place_id}
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
});

export type AccountFormValues = z.infer<typeof accountFormSchema>;
