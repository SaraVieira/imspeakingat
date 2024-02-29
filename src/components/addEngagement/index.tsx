import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { DatePicker } from "../datePicker";
import { Button } from "../ui/button";
import { type AccountFormValues, accountFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EngamentType } from "@prisma/client";
import { addDays } from "date-fns";
import { api } from "~/utils/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const AddEngagementForm = ({
  onSubmit,
  values,
}: {
  onSubmit: (v: AccountFormValues) => any;
  values?: any;
}) => {
  const { data: conferences } = api.conferences.get.useQuery();
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

        <FormField
          control={form.control}
          name="confId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block">Conference</FormLabel>
              <FormControl className="block w-full">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an event" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Events</SelectLabel>
                      {(conferences ?? []).map((c) => (
                        <SelectItem key={c.id} value={c.id}>
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

        {!form.getValues().confId && (
          <div className="space-y-8">
            {" "}
            <FormField
              control={form.control}
              name="confName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conference name</FormLabel>
                  <FormControl>
                    <Input placeholder="Conference name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conference website</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="www.example.com"
                      {...field}
                    />
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
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <GooglePlacesAutocomplete
                      apiKey={process.env.NEXT_PUBLIC_GPLACES_KEY}
                      selectProps={{
                        onChange: field.onChange,
                        value: field.value?.label as any,
                        classNames: {
                          control: () => "control-map",
                          input: () => "select-map",
                          menuList: () => "list-map",
                          indicatorSeparator: () => "separator-map",
                          option: ({ isFocused }) =>
                            isFocused ? "focused-option-map" : "",
                        },
                      }}
                      autocompletionRequest={{
                        types: ["(regions)"],
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Select where the conference is located
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dates</FormLabel>
                  <FormControl>
                    <DatePicker
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
        <Button type="submit">{values ? "Update" : "Create"}</Button>
      </form>
    </Form>
  );
};
