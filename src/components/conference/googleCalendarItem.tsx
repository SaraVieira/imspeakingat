import { addDays, format } from "date-fns";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import type { Conference } from "@prisma/client";

export const GoogleCalendarItem = ({
  conference,
}: {
  conference: Conference;
}) => {
  const gCalendarUrl = () => {
    const f = (d: Date) => format(d, "yyyyMMdd");
    const location = (conference?.location as any)?.formattedAddress
      ? `&location=${(conference?.location as any)?.formattedAddress}`
      : "";

    const endDate =
      conference.dateEnd && f(conference.dateEnd) !== f(conference.dateStart)
        ? `/${f(addDays(conference.dateEnd, 1))}`
        : `/${f(conference.dateStart)}`;

    return `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${f(conference.dateStart)}${endDate}&details${location}&text=${conference.name}`;
  };
  return (
    <DropdownMenuItem>
      <a target="_blank" href={gCalendarUrl()}>
        Add to Google Calendar
      </a>
    </DropdownMenuItem>
  );
};
