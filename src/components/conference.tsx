import { format } from "date-fns";
import { Card, CardHeader } from "./ui/card";
import ReactCountryFlag from "react-country-flag";
import { type Conference, type EngamentType } from "@prisma/client";
import { cn } from "~/lib/utils";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { api } from "~/utils/api";
import { toast } from "./ui/use-toast";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AddEngagementForm } from "./addEngagement";

type ConferenceCardProps = {
  Conference: Conference;
  type: EngamentType;
  talk?: string;
  id: string;
  past?: boolean;
  onDelete: () => void;
};

export const ConferenceCard = (props: ConferenceCardProps) => {
  const { Conference, type, talk, past, id, onDelete } = props;
  const country = (Conference?.location as any)?.addressComponents.find(
    (a: any) => a.types.includes("country"),
  );
  const { mutateAsync: deleteEvent } = api.events.delete.useMutation();
  const [isEditing, setIsEditing] = useState(false);
  const { mutateAsync: updateEvent } = api.events.update.useMutation();

  return (
    <Card>
      <CardHeader
        className={cn(
          "flex flex-row items-center justify-between",
          past && "opacity-50",
        )}
      >
        <h4 className="text font-medium leading-none">
          {type === "TALK" && `Your talk is: ${talk} `}
          {type === "MC" && `Your will MC `}
          {type === "PANEL" && `You will be in a panel `}
          {type === "OTHER" && `You will be `}
          at{" "}
          <span className="font-bold">
            {Conference?.website ? (
              <a href={Conference.website} target="_blank">
                {Conference.name}
              </a>
            ) : (
              Conference?.name
            )}
          </span>
        </h4>
        <div className="flex items-center gap-4">
          {Conference && (
            <p className="!mt-0 flex items-center gap-2 text-muted-foreground">
              <ReactCountryFlag countryCode={country?.shortText} svg />
              {format(new Date(Conference?.dateStart), "dd MMMM yyyy")}{" "}
              {Conference?.dateEnd && (
                <>- {format(new Date(Conference?.dateEnd), "dd MMMM yyyy")}</>
              )}
            </p>
          )}
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
                        });
                        onDelete();
                        setIsEditing(false);
                      }}
                    />
                  </div>
                </SheetContent>
              </Sheet>

              <DropdownMenuItem
                className="text-destructive"
                onClick={async () => {
                  await deleteEvent({ id });
                  toast({
                    title: "Event Deleted",
                  });
                  onDelete();
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
    </Card>
  );
};
