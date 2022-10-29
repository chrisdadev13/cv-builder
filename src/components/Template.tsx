import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./templates/components/Header";

const Template = ({ cv }) => {
  return (
    <div
      style={{
        width: "595px",
        height: "842px",
        background: "white",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
        margin: "41px 50px 61px 50px",
        color: "black",
      }}
    >
      <Header personal={cv.personal} />
    </div>
  );
};

export default Template;
