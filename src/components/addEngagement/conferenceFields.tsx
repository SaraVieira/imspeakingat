import { Conference } from "@prisma/client";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { api } from "~/utils/api";
import { DatePicker } from "../datePicker";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ConferenceCombobox } from "./conferenceCombobox";
import { LocationInput } from "./location";

// id: true,
// name: true,
// dateStart: true,
// dateEnd: true,
// location: true,
// website: true,
export const ConferenceFields = ({ form }: { form: any }) => {
  const [selected, setSelected] = useState<Conference | undefined>();
  const { data: conferences } = api.conferences.get.useQuery();

  const handleSelect = (value: string) => {
    const selectedConf = conferences?.find((conf) => conf.id === value);
    console.log(selectedConf);
    if (selectedConf) {
      setSelected(selectedConf);
      form.setValue("confId", value);
    }
  };

  return (
    <>
      <ConferenceCombobox
        handleSelect={handleSelect}
        conferences={conferences ?? []}
      />

      {selected && (
        <div className="space-y-8">
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
                  <LocationInput field={field} />
                </FormControl>
                <FormMessage />
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
                    selected={field.value as unknown as DateRange}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </>
  );
};
