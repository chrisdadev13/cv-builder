import React, { useState } from "react";
import LeftWrapper from "./LeftWrapper";
import NavBar from "./NavBar";
import { Container } from "@chakra-ui/react";
import { Remarkable } from "remarkable";

interface StateProps {
  personal: object;
  experience: Array<string>;
  education: Array<string>;
  skills: object;
  certificates: Array<string>;
}

const Main = () => {
  const [cvData, setCvData] = useState<StateProps>({
    personal: {},
    experience: [],
    education: [],
    skills: {},
    certificates: [],
  });

  const md = new Remarkable();

  const getPersonalMarkup = (data: string) => {
    return { __html: md.render(data) };
  };

  const handlePersonalData = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;

    setCvData((prev: any) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };

  const addExperienceField = () => {
    if (cvData.experience.length < 5) {
      setCvData((prev: any) => ({
        ...prev,
        experience: [
          ...prev.experience,
          {
            id: prev.experience.length,
            open: true,
          },
        ],
      }));
    }
  };

  const handleExperienceData = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: string
  ) => {
    let name = event.target.name;
    let value = event.target.value;
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <NavBar />
      <LeftWrapper cv={cvData} onChangePersonal={handlePersonalData} />
      <button onClick={addExperienceField}>ADD button</button>
      <button onClick={() => console.log(cvData)}>Test button</button>
    </div>
  );
};

export default Main;
