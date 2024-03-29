import FullCalendar from "@fullcalendar/react";
import multimonth from "@fullcalendar/multimonth";
import daygrid from "@fullcalendar/daygrid";
import { type ReturnType } from "~/server/api/routers/events";

export const CalendarView = ({ events }: { events: ReturnType[] }) => {
  const calendarEvents = events.map((e) => ({
    title: e.conference?.name,
    allDay: true,
    ...(e.conference?.dateEnd
      ? { start: e.conference?.dateStart, end: e.conference.dateEnd }
      : { date: e.conference?.dateStart }),
    ...(e.conference?.website && { url: e.conference.website }),
  }));
  return (
    <FullCalendar
      plugins={[multimonth, daygrid]}
      defaultAllDay
      initialView="year"
      views={{
        month: {
          type: "dayGridMonth",
        },
        year: {
          type: "multiMonth",

          duration: { months: 6 },
        },
      }}
      headerToolbar={{
        start: "month,year",
        center: "title",
        end: "prev,next",
      }}
      events={calendarEvents}
    />
  );
};
