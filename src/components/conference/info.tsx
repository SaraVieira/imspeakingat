import Link from "next/link";

import type { ConferenceProps } from "./";

export const ConferenceInfo = ({ type, talk, conference }: ConferenceProps) => {
  return (
    <h4 className="text font-medium leading-none">
      {type === "TALK" && `Your talk is: ${talk} `}
      {type === "MC" && `Your will MC `}
      {type === "PANEL" && `You will be in a panel `}
      {type === "OTHER" && `You will be `}
      at{" "}
      <span className="font-bold">
        <Link href={`/events/${conference.slug}`}>{conference.name}</Link>
      </span>
    </h4>
  );
};
