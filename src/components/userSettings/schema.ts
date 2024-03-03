import { z } from "zod";

export const accountFormSchemaInside = {
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  name: z.string().optional(),
  bio: z.string().optional(),
  website: z.string().url().optional(),
  github: z.string().optional(),
  x: z.string().optional(),
  threads: z.string().optional(),
  mastodon: z.string().optional(),
  linkedin: z.string().optional(),
};
export const accountFormSchema = z.object({
  ...accountFormSchemaInside,
  location: z.string().optional(),
});
export type AccountFormValues = z.infer<typeof accountFormSchema>;
