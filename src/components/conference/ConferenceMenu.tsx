import { MoreVertical } from "lucide-react";
import type { ConferenceProps } from ".";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { AddEngagementForm } from "../addEngagement";
import { toast } from "../ui/use-toast";
import { GoogleCalendarItem } from "./googleCalendarItem";
import { useState } from "react";
import { api } from "~/utils/api";

export const ConferenceMenu = (
  props: ConferenceProps & { onDelete: () => void },
) => {
  const { mutateAsync: deleteEvent } = api.events.delete.useMutation();
  const [isEditing, setIsEditing] = useState(false);
  const { mutateAsync: updateEvent } = api.events.update.useMutation();
  const { id, conference, onDelete } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"ghost"} size={"sm"}>
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Sheet open={isEditing} onOpenChange={setIsEditing}>
          <SheetTrigger className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Edit
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit event</SheetTitle>
            </SheetHeader>
            <div className="mt-8">
              <AddEngagementForm
                values={props}
                onSubmit={async (values) => {
                  await updateEvent({ id, ...values });
                  toast({
                    title: "Event Updated",
                    duration: 1000,
                  });
                  onDelete();
                  setIsEditing(false);
                }}
              />
            </div>
          </SheetContent>
        </Sheet>
        <GoogleCalendarItem conference={conference} />
        <DropdownMenuItem
          className="text-destructive"
          onClick={async () => {
            await deleteEvent({ id });
            toast({
              title: "Event Deleted",
              duration: 2000,
            });
            onDelete();
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
