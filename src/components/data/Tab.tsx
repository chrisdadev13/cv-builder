import { ChangeEventHandler } from "react";
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
import PersonalTypes from "../utils/personalTypes";

interface TabTypes {
  personal: PersonalTypes;
  onChange: ChangeEventHandler<HTMLElement>;
}

const Tab = ({ personal, onChange }: TabTypes) => {
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
          <Input
            type="text"
            variant="filled"
            w="130px"
            name="firstName"
            value={personal.firstName}
            onChange={onChange}
          />
        </Box>
        <Spacer mx="10px" />
        <Box>
          <Text>Last Name</Text>
          <Input
            type="text"
            variant="filled"
            w="130px"
            name="lastName"
            value={personal.lastName}
            onChange={onChange}
          />
        </Box>
      </Flex>
      <Box mt="3">
        <Text>Subtitle</Text>
        <Input
          type="text"
          variant="filled"
          w="280px"
          name="subtitle"
          value={personal.subtitle}
          onChange={onChange}
        />
      </Box>
      <Box mt="3">
        <Text>Address line 1</Text>
        <Input
          type="text"
          variant="filled"
          w="280px"
          name="address1"
          value={personal.address1}
          onChange={onChange}
        />
      </Box>
      <Box mt="3">
        <Text>Address line 2</Text>
        <Input
          type="text"
          variant="filled"
          w="280px"
          name="address2"
          value={personal.address2}
          onChange={onChange}
        />
      </Box>
      <Flex my="3">
        <Box>
          <Text>City</Text>
          <Input
            type="text"
            variant="filled"
            w="130px"
            name="city"
            value={personal.city}
            onChange={onChange}
          />
        </Box>
        <Spacer mx="10px" />
        <Box>
          <Text>Pin code</Text>
          <Input
            type="text"
            variant="filled"
            w="130px"
            name="pinCode"
            value={personal.pinCode}
            onChange={onChange}
          />
        </Box>
      </Flex>
      <Divider my="36px" />
      <Box mt="3">
        <Text>Phone number</Text>
        <InputMask
          mask="(999)-999-9999"
          maskChar=""
          name="phoneNumber"
          value={personal.phoneNumber}
          onChange={onChange}
        >
          {() => (
            <Input type="text" variant="filled" w="280px" name="phoneNumber" />
          )}
        </InputMask>
      </Box>
      <Box mt="3">
        <Text>Email address</Text>
        <Input
          type="text"
          variant="filled"
          w="280px"
          name="emailAddress"
          value={personal.emailAddress}
          onChange={onChange}
        />
      </Box>
      <Box mt="3">
        <Text>
          Website{" "}
          <Tooltip label="Example: www.website-name.com">
            <QuestionOutlineIcon />
          </Tooltip>
        </Text>
        <Input
          type="text"
          variant="filled"
          w="280px"
          name="website"
          value={personal.website}
          onChange={onChange}
        />
      </Box>
    </Container>
  );
};

export default Tab;
