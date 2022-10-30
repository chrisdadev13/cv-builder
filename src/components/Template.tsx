import React from "react";
import { Container } from "@chakra-ui/react";
import jsPDF, { jsPdf } from "jspdf";
import Header from "./templates/components/Header";
import Summary from "./templates/components/Summary";
import Experience from "./templates/components/Experience";
import Education from "./templates/components/Education";
import { DeleteIcon } from "@chakra-ui/icons";

const Template = ({ cv, markUp }) => {
  return (
    <div
      id="testing"
      style={{
        paddingLeft: "0px",
        width: "595px",
        height: "782px",
      }}
    >
      <Header personal={cv.personal} />
      <Summary personal={cv.personal} markUpSupport={markUp} />
      <Experience experience={cv.experience} markUpSupport={markUp} />
      <Education education={cv.education} markUpSupport={markUp} />
    </div>
  );
};

export default Template;
