import {
  Flex,
  Text,
  Image,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import { ParentPlatformsProps } from "interfaces/parentPlatformsProps";
import { GameProps } from "interfaces/gameProps";

import { PlatformIcon } from "components/PlatformIcon/PlatformIcon";

import { Card_Image, Card_Text, Card_Wrapper } from "./Card.styles";

export const Card = (game: GameProps) => {
  const metacriticColor = (value: number) => {
    if (value > 0 && value <= 45) {
      return "red.500";
    }
    if (value > 45 && value <= 75) {
      return "yellow.500";
    }
    if (value > 75 && value <= 100) {
      return "green.500";
    }
  };
  return (
    <Flex flexDirection="column" {...Card_Wrapper}>
      <Image
        {...Card_Image}
        objectFit="cover"
        src={game.background_image}
        alt={`${game.name}`}
      />
      <Text {...Card_Text}>{game.name}</Text>
      <Flex justifyContent="space-between">
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
        <CircularProgress
          value={game.metacritic}
          color={metacriticColor(game.metacritic)}
          size="35"
        >
          <CircularProgressLabel color="white">
            {game.metacritic}
          </CircularProgressLabel>
        </CircularProgress>
      </Flex>
    </Flex>
  );
};
