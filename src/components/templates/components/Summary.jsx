import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Summary = ({ personal, markUpSupport }) => {
  return (
    <Box textAlign="center" w="100%" color="black">
      <Text
        fontSize="10px"
        dangerouslySetInnerHTML={markUpSupport(personal.summary)}
      ></Text>
      <Divider my="3" />
    </Box>
  );
};

export default Summary;
