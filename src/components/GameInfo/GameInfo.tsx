import { Flex, Heading, Image } from "@chakra-ui/react";

import { ParentPlatforms, GameDescription } from "components";

import { GameInfo_H1, GameInfo_Wrapper } from "./GameInfo.styles";

import { GameProps } from "interfaces/gameProps";

export const GameInfo = (gameInfo: GameProps) => {
  return (
    <Flex flexDirection="column" {...GameInfo_Wrapper} color="white">
      <Image
        src={gameInfo.background_image}
        alt={gameInfo.name}
        width={{ base: "100vw", xl: "70vw" }}
      />
      <Heading {...GameInfo_H1}>{gameInfo.name}</Heading>
      <ParentPlatforms parent_platforms={gameInfo.parent_platforms} />

      <GameDescription {...gameInfo} />
    </Flex>
  );
};
