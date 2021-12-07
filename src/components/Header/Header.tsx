import { Heading, Flex } from "@chakra-ui/react";
import { Header_Text, Header_Wrapper } from "./Header.styles";

export const Header = () => {
  return (
    <Flex {...Header_Wrapper}>
      <Heading {...Header_Text}> RAWG GAMES LIST</Heading>
    </Flex>
  );
};
