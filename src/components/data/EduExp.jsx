import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import AddButton from "../utils/AddButton";
import EduModal from "../utils/EduModal";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";

const formatDate = (dateValue) => {
  return moment(dateValue, "DD/MM/YYYY").format("LL");
};

const EduExp = ({
  education,
  modalOpen,
  counter,
  onClickAdd,
  onClickSave,
  onClickEdit,
  onClickDelete,
  onChange,
}) => {
  const borderTheme = useColorModeValue("#EDF2F7", "#333");

  return (
    <Container w="full" color="#718096" fontSize="sm" textTransform="uppercase">
      <Heading
        id="school"
        size="lg"
        as="h2"
        mb="24px"
        fontWeight="medium"
        mt="5"
        textTransform="capitalize"
      >
        Education
      </Heading>
      {education.map((obj, index) => (
        <Container
          w="280px"
          h="70px"
          border="solid"
          borderColor={borderTheme}
          borderWidth="medium"
          borderRadius="md"
          py="7px"
          px="5px"
          my="5px"
          textTransform="capitalize"
          display="flex"
          alignItems="center"
          key={index}
        >
          <Box>
            <Heading fontSize="16px">{obj.university}</Heading>
            <Text>
              {formatDate(obj.startDate) == ""
                ? "Start date"
                : formatDate(obj.startDate)}{" "}
              -{" "}
              {formatDate(obj.endDate) == ""
                ? "End date"
                : formatDate(obj.endDate)}
            </Text>
            <Text fontSize="10px">
              {obj.degree}, {obj.studyField}
            </Text>
          </Box>
          <Spacer />
          <Box cursor="pointer" key={index} onClick={() => onClickEdit(index)}>
            <EditIcon />
          </Box>
        </Container>
      ))}
      <EduModal
        open={modalOpen}
        data={education}
        index={counter}
        onChange={onChange}
        onClickSave={onClickSave}
        onClickDelete={onClickDelete}
      />
      <AddButton onClick={onClickAdd} />
    </Container>
  );
};

export default EduExp;
