import { format, isSameDay } from "date-fns";
import { Card, CardHeader } from "../ui/card";
import ReactCountryFlag from "react-country-flag";
import { type Conference, type EngamentType } from "@prisma/client";
import { cn } from "~/lib/utils";
import { ConferenceInfo } from "./info";
import { ConferenceMenu } from "./ConferenceMenu";

export type ConferenceProps = {
  Conference: Conference;
  type: EngamentType;
  talk?: string;
  id: string;
};

type ConferenceCardProps = ConferenceProps & {
  past?: boolean;
  onDelete: () => void;
};

export const ConferenceCard = (props: ConferenceCardProps) => {
  const { Conference, past, onDelete } = props;
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
        <ConferenceInfo {...props} />
        <div className="flex items-center gap-4">
          {Conference && (
            <p className="!mt-0 flex items-center gap-2 text-muted-foreground">
              <ReactCountryFlag
                countryCode={
                  country?.shortText?.code ?? country.country?.shortText
                }
                svg
              />
              {format(new Date(Conference?.dateStart), "dd MMMM yyyy")}{" "}
              {Conference?.dateEnd &&
                !isSameDay(Conference.dateStart, Conference.dateEnd) && (
                  <>- {format(new Date(Conference?.dateEnd), "dd MMMM yyyy")}</>
                )}
            </p>
          )}
          <ConferenceMenu {...props} onDelete={onDelete} />
        </div>
      </CardHeader>
    </Card>
  );
};
