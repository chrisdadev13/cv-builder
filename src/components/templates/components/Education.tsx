import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Education = ({ education, markUpSupport }) => {
  return (
    <Box textAlign="center" mr="5" mt="5" w="full">
      <Heading fontSize="md">Education</Heading>
      <Box>
        {education.map((item) => (
          <Box>
            <Text fontSize="xs">{item.university}</Text>
            <Text fontSize="xs" color="#adadad">
              {item.degree}
            </Text>
            <Text fontSize="xs" color="#adadad">
              {item.gpa}
            </Text>
            <Text fontSize="xs" color="#adadad">
              {item.studyField}
            </Text>
            <Text fontSize="xs" color="#adadad">
              {item.startDate} - {item.endDate}
            </Text>
            <Text
              fontSize="xs"
              dangerouslySetInnerHTML={markUpSupport(item.summary)}
            />
            <Text fontSize="xs" fontWeight="bold"></Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
