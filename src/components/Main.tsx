import React, { useState } from "react";
import DataForm from "./data/DataForm";
import NavBar from "./NavBar";
import { Remarkable } from "remarkable";

interface StateProps {
  personal: object;
  experience: Array<any>;
  education: Array<string>;
  skills: object;
  certificates: Array<string>;
}

const Main = () => {
  const [cvData, setCvData] = useState<StateProps>({
    personal: {
      firstName: "",
      lastName: "",
      subtitle: "",
      address1: "",
      address2: "",
      city: "",
      pinCode: "",
      phoneNumber: "",
      emailAddress: "",
      website: "",
      summary: "",
    },
    experience: [
      {
        companyName: "DP Technology Corp.",
        position: "Frontend Developer, Stuttgart DE",
        website: "www.espritcam.com",
        startDate: "09/01/2015",
        endDate: "09/07/2018",
        summary:
          "* Work closely with programmers and clients to meet project requirements, goals and functionality" +
          "\n" +
          "* Develop and integrate customized themes into WordPress, PHP-Fusion, and Concrete5." +
          "\n" +
          "* Enable site-wide promotions by programming HTML5 canvases to animate particles on web backgrounds",
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

  const addExperienceField = (openModal: Function) => {
    if (cvData.experience.length < 5) {
      setCvData((prev: any) => ({
        ...prev,
        experience: [
          ...prev.experience,
          {
            id: prev.experience.length,
          },
        ],
      }));
      openModal();
    }
  };

  const deleteExperienceField = () => {
    console.log("Hola");
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
      <DataForm
        cv={cvData}
        onChangePersonal={handlePersonalData}
        onClickAddWork={addExperienceField}
        onClickDeleteWork={deleteExperienceField}
        onChangeWork={handleExperienceData}
      />
    </div>
  );
};

export default Main;
