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

export const ConferenceFields = ({ form }: { form: any }) => {
  const [adding, setAdding] = useState(false);
  const { data: conferences } = api.conferences.get.useQuery({ limit: 30 });

  const handleSelect = (value: string) => {
    const selectedConf = conferences?.find((conf) => conf.id === value);
    if (selectedConf) {
      setAdding(false);
      form.setValue("confId", value);
    }
  };

  const addEvent = () => {
    setAdding(true);
    form.setValue("confId", null);
  };

  return (
    <>
      {!adding && (
        <ConferenceCombobox
          handleSelect={handleSelect}
          conferences={conferences ?? []}
          addEvent={addEvent}
        />
      )}

      {adding && (
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
