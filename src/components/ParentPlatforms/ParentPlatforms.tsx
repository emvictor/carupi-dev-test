import { Flex } from "@chakra-ui/react";

import { PlatformIcon } from "components";

import { ParentPlatformsProps } from "interfaces/parentPlatformsProps";

export const ParentPlatforms = ({ ...props }) => {
  return (
    <Flex width="100%" justifyContent="flex-start" marginTop="1rem">
      {props.parent_platforms.map((item: ParentPlatformsProps) => {
        return (
          <PlatformIcon key={item.platform.id} platform={item.platform.name} />
        );
      })}
    </Flex>
  );
};
