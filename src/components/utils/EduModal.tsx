import React, { MouseEventHandler, ChangeEventHandler } from "react";
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

interface ModalType {
  data: Array<any>;
  index: number;
  open: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSave: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: MouseEventHandler<HTMLButtonElement>;
  onClickClose: MouseEventHandler<HTMLButtonElement>;
}

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
        <Box display="flex">
          <Heading fontSize="18px" fontWeight="bold" textTransform="capitalize">
            Add Education
          </Heading>
          <Spacer />
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
            name="university"
            value={data[index].university}
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
            <Input
              type="text"
              w="100%"
              h="34px"
              variant="filled"
              name="degree"
              value={data[index].degree}
              onChange={(event) => onChange(event, index)}
            />
          </Box>
          <Spacer mx="5px" />
          <Box w="50%">
            <Text>GPA</Text>
            <Input
              type="text"
              w="100%"
              h="34px"
              variant="filled"
              name="gpa"
              value={data[index].gpa}
              onChange={(event) => onChange(event, index)}
            />
          </Box>
        </Flex>
        <Flex my="20px">
          <Box w="50%">
            <Text>Start date</Text>
            <InputMask
              mask="99/99/9999"
              maskChar=""
              name="startDate"
              value={data[index].startDate}
              onChange={(event) => onChange(event, index)}
            >
              {() => (
                <Input
                  type="text"
                  w="100%"
                  h="34px"
                  variant="filled"
                  name="startDate"
                  value={data[index].startDate}
                />
              )}
            </InputMask>
          </Box>
          <Spacer mx="5px" />
          <Box w="50%">
            <Text>End date</Text>
            <InputMask
              mask="99/99/9999"
              maskChar=""
              name="endDate"
              value={data[index].endDate}
              onChange={(event) => onChange(event, index)}
            >
              {() => (
                <Input
                  type="text"
                  w="100%"
                  h="34px"
                  variant="filled"
                  name="endDate"
                  value={data[index].endDate}
                />
              )}
            </InputMask>
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
        <Box display="flex" alignItems="center" mt="5">
          <Button colorScheme="blue" onClick={onClickSave}>
            Save
          </Button>
          {index !== 0 && (
            <Button ml="2" colorScheme="red" onClick={onClickDelete}>
              <DeleteIcon />
              Delete
            </Button>
          )}
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default EduModal;
