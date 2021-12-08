import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

import { handleMetacriticColor } from "lib/handleMetacriticColor";

export const Metacritic = ({ ...props }) => {
  return (
    <CircularProgress
      value={props.value}
      color={handleMetacriticColor(props.value)}
      size="35"
    >
      <CircularProgressLabel color="white">{props.value}</CircularProgressLabel>
    </CircularProgress>
  );
};
