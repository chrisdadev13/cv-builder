import React, { useState, ChangeEventHandler, MouseEventHandler } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import AddButton from "../utils/AddButton";
import ExpModal from "../utils/ExpModal";
import moment from "moment";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const formatDate = (dateValue: string) => {
  console.log(moment(dateValue).format("LL"));
  return moment(dateValue, "DD.MM.YYYY").format("LL");
};

const WorkExp = ({ experience, onClickAdd, onClickSave }) => {
  const [currentModal, setCurrentModal] = useState("0");
  const borderTheme = useColorModeValue("#EDF2F7", "#333");

  return (
    <Container w="full" color="#718096" fontSize="sm" textTransform="uppercase">
      <Heading
        id="experience"
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
        >
          <Box>
            <Heading fontSize="16px">{obj.companyName}</Heading>
            <Text>
              {formatDate(obj.startDate)} - {formatDate(obj.endDate)}
            </Text>
            <Text fontSize="10px">{obj.position}</Text>
          </Box>
          <Spacer />
          <Box cursor="pointer">
            <MoreVertIcon />
          </Box>
        </Container>
      ))}
      <AddButton onClick={onClickAdd} />
    </Container>
  );
};

export default WorkExp;
