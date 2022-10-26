import React from "react";
import Tab from "./forms/Tab";
import Summary from "./forms/Summary";
import WorkExp from "./forms/WorkExp";
import { Container, useColorMode, useColorModeValue } from "@chakra-ui/react";

interface LeftTypes {
  cv: object;
  onChangePersonal: Function;
  onChangeWork: Function;
  onChangeEducation: Function;
  onChangeSkills: Function;
  onChangeCourses: Function;
  onClickAddWork: Function;
  onClickSaveWork: Function;
}

const LeftWrapper = ({
  cv,
  onChangePersonal,
  onChangeWork,
  onChangeEducation,
  onChangeSkills,
  onChangeCourses,
  onClickAddWork,
  onClickSaveWork,
}: LeftTypes) => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <WorkExp
        experience={cv.experience}
        onClickAdd={onClickAddWork}
        onClickSave={onClickSaveWork}
      />
    </Container>
  );
};

export default LeftWrapper;
