import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Summary = ({ personal, markUpSupport }) => {
  return (
    <Box textAlign="center" mr="5" color="black">
      <Text
        fontSize="xs"
        dangerouslySetInnerHTML={markUpSupport(personal.summary)}
      ></Text>
    </Box>
  );
};

export default Summary;
