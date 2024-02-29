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

export const ConferenceCombobox = ({ conferences }: { conferences: any[] }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {name
            ? conferences.find((conference) => conference.name === name)?.name
            : "Select conference..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search conferences..." className="h-9" />
          <CommandEmpty>No conference found.</CommandEmpty>
          <CommandGroup>
            {conferences.map((conference) => (
              <CommandItem
                key={conference.name}
                value={conference.name}
                onSelect={(currentValue) => {
                  setName(currentValue === name ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {conference.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
