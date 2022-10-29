import React from "react";
import { Container } from "@chakra-ui/react";
import jsPDF, { jsPdf } from "jspdf";
import Header from "./templates/components/Header";
import Summary from "./templates/components/Summary";
import Experience from "./templates/components/Experience";
import Education from "./templates/components/Education";

const Template = ({ cv, markUp }) => {
  return (
    <Container
      w="5xl"
      h="842px"
      boxShadow="lg"
      bg="white"
      my="61px"
      mx="50px"
      id="testing"
      p="none"
    >
      <Header personal={cv.personal} />
      <Summary personal={cv.personal} markUpSupport={markUp} />
      <Experience experience={cv.experience} markUpSupport={markUp} />
      <Education education={cv.education} markUpSupport={markUp} />
    </Container>
  );
};

export default Template;
