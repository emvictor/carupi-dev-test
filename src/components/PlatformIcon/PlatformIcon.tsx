import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { FaPlaystation, FaApple, FaXbox, FaLinux } from "react-icons/fa";
import { RiComputerFill, RiAndroidFill } from "react-icons/ri";
import { SiNintendoswitch } from "react-icons/si";

import { PlatformIconProps } from "interfaces/platformIconProps";

import { Card_Platform } from "components/Card/Card.styles";

export const PlatformIcon = ({ platform }: PlatformIconProps) => {
  let Icon;
  switch (platform) {
    case "PlayStation":
      Icon = <FaPlaystation {...Card_Platform} />;
      break;
    case "Xbox":
      Icon = <FaXbox {...Card_Platform} />;
      break;
    case "PC":
      Icon = <RiComputerFill {...Card_Platform} />;
      break;
    case "Apple Macintosh":
      Icon = <FaApple {...Card_Platform} />;
      break;
    case "Android":
      Icon = <RiAndroidFill {...Card_Platform} />;
      break;
    case "Linux":
      Icon = <FaLinux {...Card_Platform} />;
      break;
    case "Nintendo":
      Icon = <SiNintendoswitch {...Card_Platform} />;
      break;
    default:
      Icon = <Text color="white">{platform}</Text>;
  }

  return <Box marginX="5px">{Icon}</Box>;
};
