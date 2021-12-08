import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { Header_Text, Header_Wrapper } from "./Header.styles";

export const Header = () => {
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.preventDefault();
    window.location.assign(`/`);
  };
  return (
    <Flex {...Header_Wrapper}>
      <Heading {...Header_Text} onClick={handleClick} cursor="pointer">
        {" "}
        RAWG GAMES LIST
      </Heading>
    </Flex>
  );
};
