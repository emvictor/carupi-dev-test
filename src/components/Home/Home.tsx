import React from "react";
import { Link } from "react-router-dom";

import { Grid, Box, Spinner, Flex } from "@chakra-ui/react";

import { GameProps } from "interfaces/gameProps";
import { getGames } from "services/getGames";

import { Card } from "components";
import { Home_Wrapper } from "./Home.styles";

export const Home = () => {
  const [games, setGames] = React.useState<[]>();

  React.useEffect(() => {
    getGames().then((data) => {
      setGames(data.results);
    });
  }, []);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(5, 1fr)",
      }}
      gap={6}
      {...Home_Wrapper}
    >
      {games !== undefined ? (
        <>
          {games.map((game: GameProps) => {
            return (
              <Box key={game.id} cursor="pointer" className={game.name}>
                <Link to={`/game/${game.id}`}>
                  <Card {...game} />
                </Link>
              </Box>
            );
          })}
        </>
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
    </Grid>
  );
};
