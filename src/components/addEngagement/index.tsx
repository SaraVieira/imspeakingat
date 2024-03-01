import { addDays } from "date-fns";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { EngamentType } from "@prisma/client";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ConferenceFields } from "./conferenceFields";
import { accountFormSchema, type AccountFormValues } from "./schema";

export const AddEngagementForm = ({
  onSubmit,
  values,
}: {
  onSubmit: (v: AccountFormValues) => any;
  values?: any;
}) => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: values
      ? {
          ...values,
          confId: values.conferenceId,
          talkTitle: values.talk,
        }
      : {
          type: EngamentType.TALK,
          date: {
            from: new Date(),
            to: addDays(new Date(), 2),
          },
        },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {Object.keys(EngamentType).map((e) => (
                    <div className="flex items-center space-x-2" key={e}>
                      <RadioGroupItem value={e} id={e} />
                      <Label htmlFor={e} className="capitalize">
                        {e.toLocaleLowerCase()}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.getValues().type === "TALK" ? (
          <FormField
            control={form.control}
            name="talkTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Talk title</FormLabel>
                <FormControl>
                  <Input placeholder="Awesome talk title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}

        <ConferenceFields form={form} />
        <Button type="submit">{values ? "Update" : "Create"}</Button>
      </form>
    </Form>
  );
};
