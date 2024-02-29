import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { api } from "~/utils/api";

import { DatePicker } from "../datePicker";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ConferenceCombobox } from "./conferenceCombobox";

export const ConferenceFields = ({ form }: { form: any }) => {
  const { data: conferences } = api.conferences.get.useQuery();
  console.log(conferences);

  return (
    <>
      <ConferenceCombobox conferences={conferences ?? []} />
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
    </>
  );
};
