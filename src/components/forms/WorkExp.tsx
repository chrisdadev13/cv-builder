import React, { ChangeEventHandler, MouseEventHandler } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";

interface ExperienceTYpes {
  experience: Array<object>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const WorkExp = () => {
  return (
    <Container w="full" color="#718096" fontSize="sm" textTransform="uppercase">
      <Heading
        id="experience"
        size="lg"
        as="h2"
        mb="24px"
        fontWeight="medium"
        mt="5"
        textTransform="capitalize"
      >
        Work Experience
      </Heading>
      <Box>
        <Button bg="white" border="solid" borderWidth="thin" ml="55%">
          <AddIcon />
          Add New
        </Button>
      </Box>
    </Container>
  );
};

export default WorkExp;
