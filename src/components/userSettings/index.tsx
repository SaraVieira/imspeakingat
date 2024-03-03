import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { type AccountFormValues, accountFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../ui/use-toast";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { countries } from "~/lib/countries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/utils/api";
import { Skeleton } from "../ui/skeleton";

export const SettingsForm = () => {
  const { data: user, refetch, isLoading } = api.user.get.useQuery();
  const updateUser = api.user.update.useMutation({
    onSuccess: () => {
      refetch();
      toast({
        title: "Updated your info!",
      });
    },
  });

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  });

  useEffect(() => {
    if (user) {
      if (user.locationCode) {
        form.setValue("location", user.locationCode);
      }
      // @ts-expect-error
      Object.keys(user).map((k) => user[k] && form.setValue(k, user[k]));
    }
  }, [user]);

  async function onSubmit(data: AccountFormValues) {
    await updateUser.mutateAsync({
      ...data,
      location: {
        code: data.location ?? "",
        name: countries.find((c) => c.code === data.location)?.name ?? "",
      },
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {!isLoading ? (
          <div className="grid w-full gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block">Location</FormLabel>
                    <FormControl className="block w-full">
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Countries</SelectLabel>
                            {countries.map((c) => (
                              <SelectItem key={c.code} value={c.code}>
                                {c.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea rows={6} placeholder="Your bio" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="awesomedev.io"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github username</FormLabel>
                    <FormControl>
                      <Input placeholder="GitHubUsername" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="x"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>X username</FormLabel>
                    <FormControl>
                      <Input placeholder="XUsername" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mastodon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mastodon link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://social.link/username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="threads"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Threads username</FormLabel>
                    <FormControl>
                      <Input placeholder="ThreadsUsername" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin username</FormLabel>
                    <FormControl>
                      <Input placeholder="LinkedinUsername" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ) : (
          <div className="grid w-full gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[80px] w-full" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
              <Skeleton className="h-[60px] w-full" />
            </div>
          </div>
        )}
        <Button type="submit" className="mt-8 w-full">
          Update account
        </Button>
      </form>
    </Form>
  );
};
