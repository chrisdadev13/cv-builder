import React, { useState } from "react";
import DataForm from "./data/DataForm";
import LeftBar from "./LeftBar";
import Template from "./Template";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Remarkable } from "remarkable";
import { Box } from "@chakra-ui/react";
import { height } from "@mui/system";

interface StateProps {
  personal: object;
  experience: Array<any>;
  education: Array<any>;
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
    education: [
      {
        university: "Harvard University",
        studyField: "Computer Science",
        degree: "Bachelor of Science",
        gpa: "Honors: cum laude (GPA: 3.6/4.0)",
        startDate: "01/04/2011",
        endDate: "05/06/2014",
        summary:
          "* Data Structures and Algorithms" +
          "\n" +
          "* Logic Design" +
          "\n" +
          "* Artificial Intelligence",
        id: 0,
      },
    ],
    skills: [],
    certificates: [],
  });

  const [expModal, setExpModal] = useState(false);
  const [expFieldCounter, setExpCounter] = useState(0);

  const [eduModal, setEduModal] = useState(false);
  const [eduFieldCounter, setEduCounter] = useState(0);

  const md = new Remarkable();

  const getMarkupSupport = (data: string) => {
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
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            website: "",
            summary: "",
            id: prev.experience.length,
          },
        ],
      }));
      setExpCounter(expFieldCounter + 1);
      setExpModal(true);
    }
  };

  const saveExperienceField = () => {
    if (cvData.experience[expFieldCounter].companyName == "") {
      console.log("Invalid");
    } else {
      setExpModal(false);
    }
  };

  const editExperienceField = (index: number) => {
    setExpCounter(index);
    setExpModal(true);
  };

  const deleteExperienceField = () => {
    setCvData((prev) => {
      const deleteField = prev.experience.filter(
        (item) => item.id !== expFieldCounter
      );
      return { ...prev, experience: [...deleteField] };
    });
    setExpModal(false);
    setExpCounter(expFieldCounter - 1);
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

  const addEducationField = () => {
    if (cvData.education.length < 3) {
      setCvData((prev: any) => ({
        ...prev,
        education: [
          ...prev.education,
          {
            university: "",
            studyField: "",
            degree: "",
            gpa: "",
            startDate: "",
            endDate: "",
            summary: "",
            id: prev.education.length,
          },
        ],
      }));
      setEduCounter(eduFieldCounter + 1);
      setEduModal(true);
    }
  };

  const saveEducationField = () => {
    if (cvData.education[eduFieldCounter].university == "") {
      return 0;
    } else {
      setEduModal(false);
    }
  };

  const editEducationField = (index: number) => {
    setEduCounter(index);
    setEduModal(true);
  };

  const deleteEducationField = () => {
    setCvData((prev) => {
      const deleteField = prev.education.filter(
        (item) => item.id !== eduFieldCounter
      );
      return { ...prev, education: [...deleteField] };
    });
    setEduModal(false);
    setEduCounter(eduFieldCounter - 1);
  };

  const handleEducationData = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let name = event.target.name;
    let value = event.target.value;

    setCvData((prev) => {
      const newEducation = prev.education.map((item) => {
        if (item.id === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prev, education: [...newEducation] };
    });
  };

  const downloadPdf = () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = document.querySelector("#testing");
    pdf.html(data).then(() => {
      pdf.save("curriculum.pdf");
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <LeftBar />
      <DataForm
        cv={cvData}
        onChangePersonal={handlePersonalData}
        onChangeExperience={handleExperienceData}
        onChangeEducation={handleEducationData}
        addExpData={addExperienceField}
        saveExpData={saveExperienceField}
        editExpData={editExperienceField}
        removeExpData={deleteExperienceField}
        expModalOpen={expModal}
        expModalCounter={expFieldCounter}
        addEduData={addEducationField}
        saveEduData={saveEducationField}
        editEduData={editEducationField}
        removeEduData={deleteEducationField}
        eduModalOpen={eduModal}
        eduModalCounter={eduFieldCounter}
      />
      <div
        style={{
          marginTop: "61px",
          marginLeft: "50px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.05)",
          width: "634px",
          height: "898px",
          paddingLeft: "15px",
        }}
      >
        <Template cv={cvData} markUp={getMarkupSupport} />
      </div>
      <button onClick={downloadPdf}>Testeo</button>
    </div>
  );
};

export default Main;
