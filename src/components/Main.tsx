import React, { useState } from "react";
import LeftWrapper from "./LeftWrapper";
import NavBar from "./NavBar";
import { Container } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

const Main = () => {
  const [cvData, setCvData] = useState({
    personal: {},
    summary: "",
    experience: {},
    education: {},
    skills: {},
    certifications: {},
  });

  const handlePersonalData = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;

    setCvData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };

  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <LeftWrapper cv={cvData} onChangePersonal={handlePersonalData} />
    </div>
  );
};

export default Main;
