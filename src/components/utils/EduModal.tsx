import React from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Box,
  Textarea,
  Input,
  Text,
  Heading,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import InputMask from "react-input-mask";
import educationTypes from "./interfaces/educationTypes";
import { ModalType } from "./ExpModal";

const EduModal = ({
  data,
  index,
  open,
  onChange,
  onClickSave,
  onClickDelete,
  onClickClose,
}: ModalType) => {
  return (
    <Modal isCentered isOpen={open} onClose={() => !open} size="xl">
      <ModalOverlay />
      <ModalContent
        p="20px"
        color="#718096"
        textTransform="uppercase"
        fontSize="14px"
      >
        <Box>
          <Heading fontSize="18px" fontWeight="bold" textTransform="capitalize">
            Add Education
          </Heading>
          <Box onClick={onClickSave} cursor="pointer">
            <CloseIcon />
          </Box>
        </Box>
        <Box my="20px">
          <Text>Institution</Text>
          <Input
            type="text"
            w="100%"
            h="34px"
            variant="filled"
            name="institution"
            value={data[index].institution}
            onChange={(event) => onChange(event, index)}
          />
        </Box>
        <Box my="20px">
          <Text>Field of study</Text>
          <Input
            type="text"
            w="100%"
            h="34px"
            variant="filled"
            name="studyField"
            value={data[index].studyField}
            onChange={(event) => onChange(event, index)}
          />
        </Box>
        <Flex>
          <Box w="50%">
            <Text>Degree type</Text>
            <Input type="text" w="180%" h="34px" 
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default EduModal;
