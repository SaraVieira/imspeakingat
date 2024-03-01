import { useSession } from "next-auth/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { api } from "~/utils/api";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "~/components/ui/use-toast";
import axios from "axios";

const Onboarding = () => {
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  const router = useRouter();
  const formSchema = z.object({
    username: z
      .string()
      .min(2)
      .max(50)
      .trim()
      .refine((s) => !s.includes(" "), "Spaces are not allowed")
      .refine(
        (s) => /^[a-zA-Z0-9_]+$/.test(s),
        "Only numbers, characters and underscores allowed",
      )
      .superRefine(async (id, ctx) => {
        if (!id) return false;
        try {
          const { data: available } = await axios(
            `/api/trpc/user.checkUsername?batch=1&input={"0":{"json":{"username":"${id}"}}}`,
          );
          if (available?.[0]?.result?.data?.json) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Username is taken",
            });
          }
        } catch {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Username is taken",
          });
        }
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const updateUsername = api.user.create_username.useMutation({
    onSuccess: () => {
      router.push("/app");
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      await updateUsername.mutateAsync({
        id: data?.user.id!,
        username: values.username.toLocaleLowerCase(),
      });
    } catch {
      toast({
        title: "There has been an issue updating your username",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container mx-auto mt-12 flex h-full max-w-lg flex-col justify-center">
      <h1 className="text-center text-lg font-bold">Welcome</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription>
                  This will be your username and your url will be at{" "}
                  <span className="block font-mono">
                    {form.getValues().username.toLocaleLowerCase() ||
                      "username"}
                    .iamspeaking.at
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="w-full" type="submit">
            Create Account
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default Onboarding;
