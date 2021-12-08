import {
  Flex,
  Text,
  Image,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import { GameProps } from "interfaces/gameProps";

import { ParentPlatforms, Metacritic } from "components";

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
      <Flex alignItems="center" paddingY="0.5rem">
        <ParentPlatforms parent_platforms={game.parent_platforms} />
        <Metacritic value={game.metacritic} />
      </Flex>
    </Flex>
  );
};
