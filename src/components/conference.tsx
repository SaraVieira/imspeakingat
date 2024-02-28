import { format } from "date-fns";
import { Card, CardHeader } from "./ui/card";
import ReactCountryFlag from "react-country-flag";
import { type Conference, type EngamentType } from "@prisma/client";
import { cn } from "~/lib/utils";

type ConferenceCardProps = {
  Conference: Conference;
  type: EngamentType;
  talk?: string;
  past?: boolean;
};

export const ConferenceCard = ({
  Conference,
  type,
  talk,
  past,
}: ConferenceCardProps) => {
  const country = (Conference?.location as any)?.addressComponents.find(
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

        {Conference && (
          <p className="!mt-0 flex items-center gap-2 text-muted-foreground">
            <ReactCountryFlag countryCode={country?.shortText} svg />
            {format(new Date(Conference?.dateStart), "dd MMMM yyyy")}{" "}
            {Conference?.dateEnd && (
              <>- {format(new Date(Conference?.dateEnd), "dd MMMM yyyy")}</>
            )}
          </p>
        )}
      </CardHeader>
    </Card>
  );
};
