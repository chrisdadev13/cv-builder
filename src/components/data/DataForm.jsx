import React from "react";
import Tab from "./Tab";
import Summary from "./Summary";
import WorkExp from "./WorkExp";
import EduExp from "./EduExp";
import { Container, useColorModeValue } from "@chakra-ui/react";

const DataForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onChangeEducation,

  addExpData,
  saveExpData,
  editExpData,
  removeExpData,

  expModalOpen,
  expModalCounter,

  addEduData,
  saveEduData,
  editEduData,
  removeEduData,

  eduModalOpen,
  eduModalCounter,
}) => {
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
        onChange={onChangeExperience}
        onClickAdd={addExpData}
        onClickSave={saveExpData}
        onClickEdit={editExpData}
        onClickDelete={removeExpData}
        modalOpen={expModalOpen}
        counter={expModalCounter}
      />
      <EduExp
        education={cv.education}
        onChange={onChangeEducation}
        onClickAdd={addEduData}
        onClickSave={saveEduData}
        onClickEdit={editEduData}
        onClickDelete={removeEduData}
        modalOpen={eduModalOpen}
        counter={eduModalCounter}
      />
    </Container>
  );
};

export default DataForm;
