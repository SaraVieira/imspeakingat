import ReactCountryFlag from "react-country-flag";
import { Card, CardHeader } from "../ui/card";
import { format } from "date-fns";
import { type Conference, type GigType } from "@prisma/client";

export const ProfileEvent = ({
  type,
  talk,
  conference,
}: {
  type: GigType;
  talk: string;
  conference: Conference | null;
}) => {
  const country = (conference?.location as any)?.addressComponents.find(
    (a: any) => a.types.includes("country"),
  );
  return (
    <Card>
      <CardHeader
        className={"block flex-row items-center justify-between sm:flex"}
      >
        <h4 className="text font-medium leading-none">
          {type === "TALK" && `A talk about ${talk} `}
          {type === "MC" && `MC'ing at `}
          {type === "PANEL" && `A a panel `}
          {type === "OTHER" && `Chilling`}
          at{" "}
          <span className="font-bold">
            {conference?.website ? (
              <a href={conference.website} target="_blank">
                {conference.name}
              </a>
            ) : (
              conference?.name
            )}
          </span>
        </h4>
        <div className="flex items-center gap-4 pt-4 sm:pt-0">
          {conference && (
            <p className="!mt-0 flex items-center gap-2 text-muted-foreground">
              <ReactCountryFlag
                countryCode={country?.shortText?.code ?? country?.shortText}
                svg
              />
              {format(new Date(conference?.dateStart), "dd MMMM yyyy")}{" "}
              {conference?.dateEnd && (
                <>- {format(new Date(conference?.dateEnd), "dd MMMM yyyy")}</>
              )}
            </p>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};
