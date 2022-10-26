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
import { CloseIcon } from "@chakra-ui/icons";

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
  open: any;
  close: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSave: MouseEventHandler<HTMLButtonElement>;
  onClickClose: MouseEventHandler<HTMLElement>;
}

const ExpModal = ({
  data,
  index,
  open,
  close,
  onChange,
  onClickSave,
  onClickClose,
}: ModalType) => {
  return (
    <Modal isCentered isOpen={open} onClose={close} size="xl">
      <ModalOverlay />
      <ModalContent
        p="20px"
        color="#718096"
        textTransform="uppercase"
        fontSize="14px"
      >
        <Box display="flex" alignItems="center">
          <Heading fontSize="18px" fontWeight="bold" textTransform="capitalize">
            Add Work Experience
          </Heading>
          <Spacer />
          <Box onClick={onClickClose} cursor="pointer">
            <CloseIcon />
          </Box>
        </Box>
        <Box my="20px">
          <Text>Company</Text>
          <Input
            type="text"
            w="100%"
            h="34px"
            variant="filled"
            name="companyName"
            value={data[index].companyName}
            onChange={(event) => onChange(event, index)}
          />
        </Box>
        <Flex>
          <Box w="50%">
            <Text>Position</Text>
            <Input
              type="text"
              w="100%"
              h="34px"
              variant="filled"
              name="position"
              value={data[index].position}
              onChange={(event) => onChange(event, index)}
            />
          </Box>
          <Spacer mx="5px" />
          <Box w="50%">
            <Text>Website</Text>
            <Input
              type="text"
              w="100%"
              h="34px"
              variant="filled"
              name="website"
              value={data[index].website}
              onChange={(event) => onChange(event, index)}
            />
          </Box>
        </Flex>
        <Flex my="20px">
          <Box w="50%">
            <Text>Start date</Text>
            <Input
              type="date"
              w="100%"
              h="34px"
              variant="filled"
              name="startDate"
              value={data[index].startDate}
              onChange={(event) => onChange(event, index)}
            />
          </Box>
          <Spacer mx="5px" />
          <Box w="50%">
            <Text>End date</Text>
            <Input
              type="date"
              w="100%"
              h="34px"
              variant="filled"
              name="endDate"
              value={data[index].endDate}
              onChange={(event) => onChange(event, index)}
            />
          </Box>
        </Flex>
        <Box>
          <Text>Summary</Text>
          <Textarea
            w="100%"
            h="60px"
            variant="filled"
            resize="none"
            name="summary"
            value={data[index].summary}
            onChange={(event) => onChange(event, index)}
          />
        </Box>
        <Button mt="20px" colorScheme="blue" onClick={onClickSave}>
          Save
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ExpModal;
