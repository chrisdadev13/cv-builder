import React, { useState } from "react";
import LeftWrapper from "./LeftWrapper";
import NavBar from "./NavBar";
import { Container } from "@chakra-ui/react";
import { Remarkable } from "remarkable";
import { ExpField } from "./utils/ExpModal";

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
    experience: [
      {
        companyName: "Microsoft, Inc",
        position: "Full-Stack Developer",
        website: "www.microsoft.com",
        startDate: "24/05/2001",
        endDate: "23/05/2002",
        summary: "I helped Bill Gates get some b",
        open: false,
        id: 0,
      },
    ],
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
    index: number
  ) => {
    let name = event.target.name;
    let value = event.target.value;

    setCvData((prev) => {
      const newExperience = prev.experience.map((item) => {
        if (item.id === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prev, experience: [...newExperience] };
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <NavBar />
      <LeftWrapper
        cv={cvData}
        onChangePersonal={handlePersonalData}
        onClickAddWork={addExperienceField}
        onChangeWork={handleExperienceData}
      />
    </div>
  );
};

export default Main;
