import { format, isSameDay } from "date-fns";

const ConferenceDates = ({
  conference: { dateStart, dateEnd },
}: {
  conference: { dateStart: Date; dateEnd: Date | null };
}) => {
  return (
    <>
      {format(new Date(dateStart), "dd MMMM yyyy")}{" "}
      {dateEnd && !isSameDay(dateStart, dateEnd) && (
        <>- {format(new Date(dateEnd), "dd MMMM yyyy")}</>
      )}
    </>
  );
};

export default ConferenceDates;
