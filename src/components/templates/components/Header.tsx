import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Header = ({ personal }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      mr="5"
      color="black"
    >
      <Heading fontSize="lg">
        {personal.firstName} {personal.lastName}
      </Heading>
      <Text fontSize="md" color="#adadad" mb="5">
        {personal.subtitle}
      </Text>
      <Box textAlign="center">
        <Text fontSize="xs">
          {personal.address1} - {personal.address2}, {personal.city}{" "}
          {personal.pinCode}
        </Text>
        <Text fontSize="xs">
          {personal.phoneNumber} - {personal.emailAddress} - {personal.website}
        </Text>
      </Box>
      <Divider my="3" />
    </Box>
  );
};

export default Header;
