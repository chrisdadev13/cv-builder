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

const Summary = () => {
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
          <Tooltip label="Give us a brief description of you and your professional life, things you learned and what can you apport">
            <QuestionOutlineIcon />
          </Tooltip>
        </Text>
        <Textarea w="280px" variant="filled" resize="none" h="79px" />
        <Text fontSize="12px" textColor="#AAA">
          This textblock supports markdown
        </Text>
      </Box>
    </Container>
  );
};

export default Summary;
