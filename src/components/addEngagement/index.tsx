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
import { AccountFormValues, accountFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EngamentType } from "@prisma/client";
import { addDays } from "date-fns";

export const AddEngagementForm = ({
  onSubmit,
}: {
  onSubmit: (v: AccountFormValues) => any;
}) => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
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
                    <div className="flex items-center space-x-2">
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
                <Input type="url" placeholder="www.example.com" {...field} />
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
                <DatePicker selected={field.value} onSelect={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
};
