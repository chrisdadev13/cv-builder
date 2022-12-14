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
import ExpModal from "../utils/ExpModal";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";

const formatDate = (dateValue) => {
  return dateValue != ""
    ? moment(dateValue, "DD/MM/YYYY").format("LL")
    : "Current date";
};

const WorkExp = ({
  experience,
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
        id="work"
        size="lg"
        as="h2"
        mb="24px"
        fontWeight="medium"
        mt="5"
        textTransform="capitalize"
      >
        Work Experience
      </Heading>
      {experience.map((obj, index) => (
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
            <Heading fontSize="16px">{obj.companyName}</Heading>
            <Text>
              {formatDate(obj.startDate) == ""
                ? "Start date"
                : formatDate(obj.startDate)}{" "}
              -{" "}
              {formatDate(obj.endDate) == ""
                ? "End date"
                : formatDate(obj.endDate)}
            </Text>
            <Text fontSize="10px">{obj.position}</Text>
          </Box>
          <Spacer />
          <Box cursor="pointer" key={index} onClick={() => onClickEdit(index)}>
            <EditIcon />
          </Box>
        </Container>
      ))}
      <ExpModal
        open={modalOpen}
        data={experience}
        index={counter}
        onChange={onChange}
        onClickSave={onClickSave}
        onClickDelete={onClickDelete}
      />
      <AddButton onClick={onClickAdd} />
    </Container>
  );
};

export default WorkExp;
