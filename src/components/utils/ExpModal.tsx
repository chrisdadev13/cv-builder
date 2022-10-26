import React, { ChangeEventHandler, MouseEventHandler } from "react";
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

export type ExpField = {
  companyName: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
};

export interface ModalType {
  data: ExpField[];
  index: number;
  open: boolean;
  close: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ExpModal = ({
  data,
  index,
  open,
  close,
  onChange,
  onClick,
}: ModalType) => {
  return (
    <Modal isCentered isOpen={open} size="xl">
      <ModalOverlay />
      <ModalContent
        p="20px"
        color="#718096"
        textTransform="uppercase"
        fontSize="14px"
      >
        <Heading fontSize="18px" fontWeight="bold" textTransform="capitalize">
          Add Work Experience
        </Heading>
        <Box my="20px">
          <Text>Company</Text>
          <Input
            type="text"
            w="100%"
            h="34px"
            variant="filled"
            name="companyName"
            value={data[index].companyName}
            onChange={onChange}
          />
        </Box>
        <Flex>
          <Box w="50%">
            <Text>Position</Text>
            <Input type="text" w="100%" h="34px" variant="filled" />
          </Box>
          <Spacer mx="5px" />
          <Box w="50%">
            <Text>Website</Text>
            <Input type="text" w="100%" h="34px" variant="filled" />
          </Box>
        </Flex>
        <Flex my="20px">
          <Box w="50%">
            <Text>Position</Text>
            <Input type="date" w="100%" h="34px" variant="filled" />
          </Box>
          <Spacer mx="5px" />
          <Box w="50%">
            <Text>Website</Text>
            <Input type="date" w="100%" h="34px" variant="filled" />
          </Box>
        </Flex>
        <Box>
          <Text>Summary</Text>
          <Textarea w="100%" h="60px" variant="filled" resize="none" />
        </Box>
        <Button mt="20px" colorScheme="blue" onClick={onClick}>
          Save
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ExpModal;
