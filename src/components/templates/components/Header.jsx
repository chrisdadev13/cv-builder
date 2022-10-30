import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Header = ({ personal }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      color="black"
      w="100%"
    >
      <Heading fontSize="md">
        {personal.firstName} {personal.lastName}
      </Heading>
      <Text fontSize="xs" color="#adadad" mb="5">
        {personal.subtitle}
      </Text>
      <Box textAlign="center">
        <Text fontSize="10px">
          {personal.address1} - {personal.address2}, {personal.city}{" "}
          {personal.pinCode}
        </Text>
        <Text fontSize="10px">
          {personal.phoneNumber} - {personal.emailAddress} - {personal.website}
        </Text>
      </Box>
      <Divider mt="3" />
    </Box>
  );
};

export default Header;
