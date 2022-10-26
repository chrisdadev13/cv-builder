import React, {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
} from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import AddButton from "../utils/AddButton";
import EduModal from "../utils/EduModal";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";

const EduExp = () => {
  return (
    <Container w="full" color="#718096" fontSize="sm" textTransform="uppercase">
      <Heading
        id="education"
        size="lg"
        as="h2"
        mb="24px"
        fontWeight="medium"
        mt="5"
        textTransform="capitalize"
      >
        Education
      </Heading>
      <AddButton />
    </Container>
  );
};

export default EduExp;
