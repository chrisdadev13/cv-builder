import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Experience = ({ experience, markUpSupport }) => {
  return (
    <Box color="black" textAlign="center" w="100%">
      <Heading fontSize="xs">Work Experience</Heading>
      <Box>
        {experience.map((item, index) => (
          <Box key={index}>
            <Text fontSize="10px" fontWeight="bold">
              {item.companyName}
            </Text>
            <Text fontSize="10px" color="#adadad">
              {item.position}
            </Text>
            <Text fontSize="10px" color="#adadad">
              {item.startDate} - {item.endDate}
            </Text>
            <Text
              fontSize="10px"
              dangerouslySetInnerHTML={markUpSupport(item.summary)}
            />
            <Text fontSize="10px" fontWeight="bold">
              {item.website}
            </Text>
            <Divider mt="5" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
