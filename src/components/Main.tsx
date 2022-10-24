import React, { useState } from "react";
import LeftWrapper from "./LeftWrapper";
import NavBar from "./NavBar";
import { Container } from "@chakra-ui/react";

const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <LeftWrapper />
    </div>
  );
};

export default Main;
