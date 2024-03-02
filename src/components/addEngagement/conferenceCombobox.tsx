import { useState } from "react";

import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const ConferenceCombobox = ({
  conferences,
  handleSelect,
  addEvent,
}: {
  conferences: any[];
  handleSelect: (value: string) => void;
  addEvent: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? conferences.find((conference) => conference.id === value)?.name
            : "Select event..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="w-[363px] sm:w-[335px]">
          <CommandInput placeholder="Search events..." className="h-9" />
          <CommandEmpty>No Events Found</CommandEmpty>
          <CommandGroup className="max-h-[200px] overflow-auto">
            {conferences.map((conference) => (
              <CommandItem
                key={conference.id}
                value={conference.name.toLowerCase()}
                onSelect={(currentValue) => {
                  const id = conferences.find(
                    (conference) =>
                      conference.name.toLowerCase() === currentValue,
                  )?.id;
                  setValue(id === value ? "" : id);
                  handleSelect(id);
                  setOpen(false);
                }}
              >
                {conference.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          onClick={() => {
            setOpen(false);
            setValue("");
            addEvent();
          }}
        >
          Add New Event
        </Button>
      </PopoverContent>
    </Popover>
  );
};
