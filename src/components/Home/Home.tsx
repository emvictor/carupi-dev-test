import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { Card } from "components";
import { GameProps } from "interfaces/gameProps";
import { Home_Wrapper } from "./Home.styles";

export const Home = ({ ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    event.preventDefault();
    props.setGameID(id);
    window.location.assign(`${window.location}game`);
  };

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
      {props.games.map((game: GameProps) => {
        return (
          <Box
            key={game.id}
            cursor="pointer"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleClick(event, game.id)
            }
            className={game.name}
          >
            <Card {...game} />
          </Box>
        );
      })}
    </Grid>
  );
};
