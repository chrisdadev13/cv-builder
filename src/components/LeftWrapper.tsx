import React from "react";
import Tab from "./forms/Tab";
import Summary from "./forms/Summary";
import { Container } from "@chakra-ui/react";

const LeftWrapper = () => {
  return (
    <Container w="320px" px="10px">
      <Tab />
      <Summary />
    </Container>
  );
};

export default LeftWrapper;
