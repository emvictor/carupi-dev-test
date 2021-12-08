import { Flex, Text, Image } from "@chakra-ui/react";

import { ParentPlatformsProps } from "interfaces/parentPlatformsProps";
import { GameProps } from "interfaces/gameProps";

import { PlatformIcon } from "components/PlatformIcon/PlatformIcon";

import { Card_Image, Card_Text, Card_Wrapper } from "./Card.styles";

export const Card = (game: GameProps) => {
  return (
    <Flex flexDirection="column" {...Card_Wrapper}>
      <Image
        {...Card_Image}
        objectFit="cover"
        src={game.background_image}
        alt={`${game.name}`}
      />
      <Text {...Card_Text}>{game.name}</Text>
      <Flex>
        {game.parent_platforms.map((item: ParentPlatformsProps) => {
          return (
            <PlatformIcon
              key={item.platform.id}
              platform={item.platform.name}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
