import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Spinner } from "@chakra-ui/react";

import { getGamesByID } from "services/getGamesByID";
import { GameProps } from "interfaces/gameProps";

import { GameInfo } from "components";
import { GamePage_Wrapper } from "./GamePage.styles";

export const GamePage = () => {
  const [gameInfo, setGameInfo] = React.useState<GameProps>();
  const { id } = useParams();

  console.log({ id });

  React.useEffect(() => {
    getGamesByID(id).then((data: GameProps) => {
      setGameInfo(data);
    });
  }, [id]);

  console.log(gameInfo);

  return (
    <Flex overflowY="scroll" flexDirection="column" {...GamePage_Wrapper}>
      {gameInfo !== undefined ? (
        <GameInfo {...gameInfo} />
      ) : (
        <Flex
          height="100vh"
          width="100vw"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" color="white" />
        </Flex>
      )}
    </Flex>
  );
};
