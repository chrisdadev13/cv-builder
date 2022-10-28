import { ChangeEventHandler } from "react";
import Tab from "./Tab";
import Summary from "./Summary";
import { Container, useColorModeValue } from "@chakra-ui/react";

import FullData from "../utils/cvTypes";

interface LeftTypes {
  cv: FullData;
  onChangePersonal: ChangeEventHandler;
}

const DataForm = ({ cv, onChangePersonal }: LeftTypes) => {
  const bg = useColorModeValue("white", "#171717");
  return (
    <Container
      w="330px"
      h="full"
      px="10px"
      boxShadow="lg"
      bg={bg}
      overflowY="scroll"
    >
      <Tab personal={cv.personal} onChange={onChangePersonal} />
      <Summary personal={cv.personal} onChange={onChangePersonal} />
    </Container>
  );
};

export default DataForm;
