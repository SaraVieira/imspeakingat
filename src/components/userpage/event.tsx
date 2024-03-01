import ReactCountryFlag from "react-country-flag";
import { Card, CardHeader } from "../ui/card";
import { format } from "date-fns";
import { Conference, EngamentType } from "@prisma/client";

export const ProfileEvent = ({
  type,
  talk,
  Conference,
}: {
  type: EngamentType;
  talk: string;
  Conference: Conference | null;
}) => {
  const country = (Conference?.location as any)?.addressComponents.find(
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
            {Conference?.website ? (
              <a href={Conference.website} target="_blank">
                {Conference.name}
              </a>
            ) : (
              Conference?.name
            )}
          </span>
        </h4>
        <div className="flex items-center gap-4 pt-4 sm:pt-0">
          {Conference && (
            <p className="!mt-0 flex items-center gap-2 text-muted-foreground">
              <ReactCountryFlag
                countryCode={
                  country?.shortText?.code ?? country.country?.shortText
                }
                svg
              />
              {format(new Date(Conference?.dateStart), "dd MMMM yyyy")}{" "}
              {Conference?.dateEnd && (
                <>- {format(new Date(Conference?.dateEnd), "dd MMMM yyyy")}</>
              )}
            </p>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};
