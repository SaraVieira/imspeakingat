import ReactCountryFlag from "react-country-flag";

import { Conference } from "@prisma/client";

const ConferenceFlag = ({ conference }: { conference: Conference }) => {
  const country = (conference?.location as any)?.addressComponents.find(
    (a: any) => a.types.includes("country"),
  );

  return (
    <ReactCountryFlag
      countryCode={
        country?.shortText?.code ?? country?.shortText.toLocaleLowerCase()
      }
      svg
    />
  );
};

export default ConferenceFlag;
