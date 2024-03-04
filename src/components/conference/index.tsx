import { type Conference, type GigType } from "@prisma/client";
import { TooltipContent } from "@radix-ui/react-tooltip";
import ReactCountryFlag from "react-country-flag";
import { cn } from "~/lib/utils";
import { Card, CardHeader } from "../ui/card";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";
import ConferenceDates from "./ConferenceDates";
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
  const country = (conference?.location as any)?.addressComponents.find(
    (a: any) => a.types.includes("country"),
  );

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
                  <ReactCountryFlag
                    countryCode={
                      country?.shortText?.code ??
                      country?.shortText.toLocaleLowerCase()
                    }
                    svg
                  />
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
