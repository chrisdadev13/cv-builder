import { ChangeEventHandler, MouseEventHandler } from "react";
import Tab from "./Tab";
import Summary from "./Summary";
import WorkExp from "./WorkExp";
import { Container, useColorModeValue } from "@chakra-ui/react";

import FullData from "../utils/interfaces/cvTypes";
import Work from "@mui/icons-material/Work";

interface DataTypes {
  cv: FullData;
  onChangePersonal: ChangeEventHandler;
  onChangeExperience: ChangeEventHandler;

  addExpData: MouseEventHandler;
  saveExpData: MouseEventHandler;
  editExpData: MouseEventHandler;
  removeExpData: MouseEventHandler;

  expModalOpen: boolean;
  expModalCounter: number;
}

const DataForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,

  addExpData,
  saveExpData,
  editExpData,
  removeExpData,

  expModalOpen,
  expModalCounter,
}: DataTypes) => {
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
    </Container>
  );
};

export default DataForm;
