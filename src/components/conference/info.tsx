import { ConferenceProps } from ".";

export const ConferenceInfo = ({ type, talk, Conference }: ConferenceProps) => {
  return (
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
  );
};
