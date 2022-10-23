import React from "react";
import InputMask from "react-input-mask";
import {
  Container,
  Box,
  Flex,
  Spacer,
  Input,
  Textarea,
  Heading,
  Text,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const Tab = () => {
  return (
    <Container w="full" textTransform="uppercase" color="#718096" fontSize="sm">
      <Heading
        id="profile"
        size="lg"
        as="h2"
        fontWeight="medium"
        mb="24px"
        textTransform="capitalize"
      >
        Profile
      </Heading>
      <Flex>
        <Box>
          <Text>First Name</Text>
          <Input type="text" variant="filled" w="130px" />
        </Box>
        <Spacer mx="10px" />
        <Box>
          <Text>Last Name</Text>
          <Input type="text" variant="filled" w="130px" />
        </Box>
      </Flex>
      <Box mt="3">
        <Text>Subtitle</Text>
        <Input type="text" variant="filled" w="280px" />
      </Box>
      <Box mt="3">
        <Text>Address line 1</Text>
        <Input type="text" variant="filled" w="280px" />
      </Box>
      <Box mt="3">
        <Text>Address line 2</Text>
        <Input type="text" variant="filled" w="280px" />
      </Box>
      <Flex my="3">
        <Box>
          <Text>City</Text>
          <Input type="text" variant="filled" w="130px" />
        </Box>
        <Spacer mx="10px" />
        <Box>
          <Text>Pin code</Text>
          <Input type="text" variant="filled" w="130px" />
        </Box>
      </Flex>
      <Divider my="36px" />
      <Box mt="3">
        <Text>Phone number</Text>
        <InputMask mask="(999)-999-9999" maskChar="">
          {() => <Input type="text" variant="filled" w="280px" />}
        </InputMask>
      </Box>
      <Box mt="3">
        <Text>Email address</Text>
        <Input type="text" variant="filled" w="280px" />
      </Box>
      <Box mt="3">
        <Text>
          Website{" "}
          <Tooltip label="Example: www.website-name.com">
            <QuestionOutlineIcon />
          </Tooltip>
        </Text>
        <Input type="text" variant="filled" w="280px" />
      </Box>
    </Container>
  );
};

export default Tab;
