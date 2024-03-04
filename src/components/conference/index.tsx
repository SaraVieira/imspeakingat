import { format, isSameDay } from "date-fns";
import { Card, CardHeader } from "../ui/card";
import ReactCountryFlag from "react-country-flag";
import { type Conference, type GigType } from "@prisma/client";
import { cn } from "~/lib/utils";
import { ConferenceInfo } from "./info";
import { ConferenceMenu } from "./ConferenceMenu";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

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
              {format(new Date(conference?.dateStart), "dd MMMM yyyy")}{" "}
              {conference?.dateEnd &&
                !isSameDay(conference.dateStart, conference.dateEnd) && (
                  <>- {format(new Date(conference?.dateEnd), "dd MMMM yyyy")}</>
                )}
            </p>
          )}
          <ConferenceMenu {...props} onDelete={onDelete} />
        </div>
      </CardHeader>
    </Card>
  );
};
