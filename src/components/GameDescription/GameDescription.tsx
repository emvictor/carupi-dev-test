import { Flex, Heading, Text } from "@chakra-ui/react";

import { GameProps } from "interfaces/gameProps";
import { DeveloperProps } from "interfaces/developerProps";

import {
  GameInfo_H2,
  GameInfo_Body,
} from "components/GameInfo/GameInfo.styles";
import { GenreProps } from "interfaces/genreProps";
import { PlatformProps } from "interfaces/platformsProps";

export const GameDescription = (gameInfo: GameProps) => {
  return (
    <Flex flexDirection="column" marginTop="1rem">
      <Heading {...GameInfo_H2}>Developers:</Heading>
      {gameInfo.developers.map((developer: DeveloperProps) => {
        return (
          <Text key={developer.id} {...GameInfo_Body}>
            {developer.name}
          </Text>
        );
      })}
      <Heading {...GameInfo_H2}>Description:</Heading>
      {gameInfo.description_raw !== undefined && (
        <Text {...GameInfo_Body}>{gameInfo.description_raw}</Text>
      )}
      <Heading {...GameInfo_H2}>Genres:</Heading>
      {gameInfo.genres.map((genre: GenreProps) => {
        return (
          <Text key={genre.id} {...GameInfo_Body}>
            {genre.name}
          </Text>
        );
      })}
      <Heading {...GameInfo_H2}>Platforms:</Heading>
      {gameInfo.platforms.map((item: PlatformProps) => {
        const platform = item.platform;
        return (
          <>
            <Text key={platform.id} {...GameInfo_Body}>
              {platform.name}
            </Text>
          </>
        );
      })}
    </Flex>
  );
};
