import React from "react";
import {
  Container,
  Box,
  Divider,
  Text,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import PersonIcon from "@mui/icons-material/Person";
import FeedIcon from "@mui/icons-material/Feed";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const LeftBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#171717");

  const themeIcon = () => {
    return bg == "white" ? (
      <Text color="#718096" fontSize="2xl">
        <MoonIcon />
      </Text>
    ) : (
      <Text color="#718096" fontSize="2xl">
        <SunIcon />
      </Text>
    );
  };
  return (
    <Container
      w="75px"
      bg={bg}
      zIndex={5}
      display="flex"
      flexDir="column"
      boxShadow="lg"
      alignItems="center"
      justifyItems="center"
      justifyContent="space-between"
      color="#718096"
      p="2"
    >
      <Box onClick={toggleColorMode} cursor="pointer">
        {themeIcon()}
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyItems="center"
      >
        <Link href="#profile">
          <PersonIcon />
        </Link>
        <Link href="#summary">
          <FeedIcon />
        </Link>
        <Link href="#work">
          <WorkIcon />
        </Link>
        <Link href="#school">
          <SchoolIcon />
        </Link>
        <Link>
          <BadgeIcon />
        </Link>
        <Link>
          <WorkspacePremiumIcon />
        </Link>
      </Box>
      <Box>
        <QuestionOutlineIcon />
      </Box>
    </Container>
  );
};

export default LeftBar;
