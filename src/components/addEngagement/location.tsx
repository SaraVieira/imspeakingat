import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export const LocationInput = ({ field }: any) => {
  console.log(field.value);
  return (
    <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GPLACES_KEY}
      minLengthAutocomplete={2}
      selectProps={{
        onChange: field.onChange,
        // value: field.value,
        placeholder: "Select a location",
        classNames: {
          singleValue: () => "control-value",
          placeholder: () => "control-placeholder",
          control: () => "control-map",
          input: () => "select-map",
          menuList: () => "list-map",
          indicatorSeparator: () => "separator-map",
          option: ({ isFocused }) => (isFocused ? "focused-option-map" : ""),
        },
      }}
      autocompletionRequest={{
        types: ["(regions)"],
      }}
    />
  );
};
