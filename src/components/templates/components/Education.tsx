import React from "react";
import { Box, Heading, Flex, Text, Divider } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Education = ({ education, markUpSupport }) => {
  return (
    <Box textAlign="center" mt="5" w="100%">
      <Heading fontSize="xs">Education</Heading>
      <Box my="2">
        {education.map((item) => (
          <Box>
            <Text fontSize="10px" fontWeight="bold">
              {item.university}
            </Text>
            <Text fontSize="10px" color="#adadad">
              {item.gpa}
            </Text>
            <Text fontSize="10px" color="#adadad">
              {item.degree} - {item.studyField}
            </Text>
            <Text fontSize="10px" color="#adadad">
              {item.startDate} - {item.endDate}
            </Text>
            <Text
              fontSize="10px"
              dangerouslySetInnerHTML={markUpSupport(item.summary)}
              mb="3"
            />
            <Text fontSize="10px" fontWeight="bold"></Text>
            <Divider my="2" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
