import { addDays, format } from "date-fns";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import type { Conference } from "@prisma/client";

export const GoogleCalendarItem = ({
  Conference,
}: {
  Conference: Conference;
}) => {
  const gCalendarUrl = () => {
    const f = (d: Date) => format(d, "yyyyMMdd");
    const location = (Conference?.location as any)?.formattedAddress
      ? `&location=${(Conference?.location as any)?.formattedAddress}`
      : "";

    const endDate =
      Conference.dateEnd && f(Conference.dateEnd) !== f(Conference.dateStart)
        ? `/${f(addDays(Conference.dateEnd, 1))}`
        : `/${f(Conference.dateStart)}`;

    return `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${f(Conference.dateStart)}${endDate}&details${location}&text=${Conference.name}`;
  };
  return (
    <DropdownMenuItem>
      <a target="_blank" href={gCalendarUrl()}>
        Add to Google Calendar
      </a>
    </DropdownMenuItem>
  );
};
