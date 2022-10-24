import React from "react";
import Tab from "./forms/Tab";
import Summary from "./forms/Summary";
import { Container, useColorMode, useColorModeValue } from "@chakra-ui/react";

const LeftWrapper = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#171717");
  return (
    <Container w="320px" h="full" px="10px" boxShadow="lg" bg={bg}>
      <Tab />
      <Summary />
    </Container>
  );
};

export default LeftWrapper;
