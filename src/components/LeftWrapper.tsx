import React from "react";
import Tab from "./forms/Tab";
import Summary from "./forms/Summary";
import { Container, useColorMode, useColorModeValue } from "@chakra-ui/react";

interface LeftTypes {
  cv: object;
  onChangePersonal: Function;
  onChangeSummary: Function;
  onChangeWork: Function;
  onChangeEducation: Function;
  onChangeSkills: Function;
  onChangeCourses: Function;
}

const LeftWrapper = ({
  cv,
  onChangePersonal,
  onChangeSummary,
  onChangeWork,
  onChangeEducation,
  onChangeSkills,
  onChangeCourses,
}: LeftTypes) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#171717");
  return (
    <Container w="320px" h="full" px="10px" boxShadow="lg" bg={bg}>
      <Tab personal={cv.personal} onChange={onChangePersonal} />
      <Summary summary={cv.summary} onChange={onChangeSummary} />
    </Container>
  );
};

export default LeftWrapper;
