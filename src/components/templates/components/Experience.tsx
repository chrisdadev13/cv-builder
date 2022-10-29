import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Experience = ({ experience, markUpSupport }) => {
  return (
    <Box textAlign="center" mr="5">
      <Heading fontSize="md">Work Experience</Heading>
      <Box>
        {experience.map((item) => (
          <Box>
            <Text fontSize="xs">{item.companyName}</Text>
            <Text fontSize="xs" color="#adadad">
              {item.position}
            </Text>
            <Text fontSize="xs" color="#adadad">
              {item.startDate} - {item.endDate}
            </Text>
            <Text
              fontSize="xs"
              dangerouslySetInnerHTML={markUpSupport(item.summary)}
            />
            <Text fontSize="xs" fontWeight="bold">
              {item.website}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
