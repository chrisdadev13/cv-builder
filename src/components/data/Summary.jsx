import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const Summary = ({ personal, onChange }) => {
  const summaryHelp = () => {
    return (
      <Container w="70">
        <Heading fontSize="18" fontStyle="bold">
          Markdown basics:
        </Heading>
        <hr />
        <Text>Unordered list: </Text>
        <Text>* Item in the list</Text>
        <Text>- Item in the list</Text>
        <Text>+ Item in the list</Text>
        <hr />
        <Text>Ordered list:</Text>
        <Text>1. Number One</Text>
        <Text>2. Number Two</Text>
        <Text>3. Number Three</Text>
        <hr />
        <Text>Font style:</Text>
        <Text>
          Bold: **<strong>Texto</strong>**
        </Text>
        <Text>
          Italic: *<i>Texto</i>*
        </Text>
      </Container>
    );
  };
  return (
    <Container
      mt="10"
      w="full"
      textTransform="uppercase"
      color="#718096"
      fontSize="sm"
    >
      <Heading
        id="summary"
        size="lg"
        as="h2"
        fontWeight="medium"
        mb="24px"
        textTransform="capitalize"
      >
        Objective
      </Heading>
      <Box>
        <Text>
          Objective
          <Tooltip label={summaryHelp()}>
            <QuestionOutlineIcon />
          </Tooltip>
        </Text>
        <Textarea
          w="280px"
          variant="filled"
          resize="none"
          h="79px"
          name="summary"
          value={personal.summary}
          onChange={onChange}
        />
        <Text fontSize="12px" textColor="#AAA">
          This textblock supports markdown
        </Text>
      </Box>
    </Container>
  );
};

export default Summary;
