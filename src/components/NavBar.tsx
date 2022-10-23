import React from "react";
import {
  Container,
  Box,
  Divider,
  Text,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#171717");

  const themeIcon = () => {
    return bg == "white" ? <SunIcon /> : <MoonIcon />;
  };
  return (
    <Container
      w="75px"
      bg={bg}
      zIndex={5}
      display="flex"
      flexDir="column"
      boxShadow="lg"
      alignItems="center"
      justifyItems="center"
    >
      <Box onClick={toggleColorMode} cursor="pointer">
        <Text fontSize="2xl">{themeIcon()}</Text>
      </Box>
      <Divider my="2" color="white" />
    </Container>
  );
};

export default NavBar;
