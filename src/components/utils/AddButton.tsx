import React, { MouseEventHandler } from "react";
import { Box, Button } from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";

interface AddBtn {
  onClick: MouseEventHandler;
}

const AddButton = ({ onClick }: AddBtn) => {
  return (
    <Box>
      <Button
        bg="white"
        border="solid"
        borderWidth="thin"
        ml="55%"
        onClick={onClick}
      >
        <AddIcon />
        Add New
      </Button>
    </Box>
  );
};

export default AddButton;
