import { type Conference, type GigType } from "@prisma/client";
import { TooltipContent } from "@radix-ui/react-tooltip";
import ReactCountryFlag from "react-country-flag";
import { cn } from "~/lib/utils";
import { Card, CardHeader } from "../ui/card";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";
import ConferenceDates from "./ConferenceDates";
import ConferenceFlag from "./ConferenceFlag";
import { ConferenceMenu } from "./ConferenceMenu";
import { ConferenceInfo } from "./info";

export type ConferenceProps = {
  conference: Conference;
  type: GigType;
  talk?: string;
  id: string;
};

type ConferenceCardProps = ConferenceProps & {
  past?: boolean;
  onDelete: () => void;
};

export const ConferenceCard = (props: ConferenceCardProps) => {
  const { conference, past, onDelete } = props;
  return (
    <Card>
      <CardHeader
        className={cn(
          "flex flex-row items-center justify-between",
          past && "opacity-50",
        )}
      >
        <ConferenceInfo {...props} />
        <div className="flex items-center gap-4">
          {conference && (
            <p className="!mt-0 flex items-center gap-2 text-muted-foreground">
              <Tooltip>
                <TooltipContent>
                  {(conference.location as any)?.formattedAddress}
                </TooltipContent>
                <TooltipTrigger className="flex items-center">
                  <ConferenceFlag conference={conference} />
                </TooltipTrigger>
              </Tooltip>
              <ConferenceDates conference={conference} />
            </p>
          )}
          <ConferenceMenu {...props} onDelete={onDelete} />
        </div>
      </CardHeader>
    </Card>
  );
};
