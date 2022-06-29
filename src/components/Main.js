import React, { useState } from "react";

import styled from "styled-components";
import BtnGrp from "./BtnGrp/BtnGrp";
import EditForm from "./EditForm/EditForm";
import PrevForm from "./PrevForm/PrevForm";
import { v4 as uuidv4 } from "uuid";

const PLACEHOLDER =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur. sint commodi repudiandae consequuntur";

const INITIALSOCLINKS = [
  { name: "website", link: "www.samplename.com", id: uuidv4() },
  { name: "linkedin", link: "https://linkedIn/samplename", id: uuidv4() },
  { name: "github", link: "https://github.com/samplename", id: uuidv4() },
  { name: "twitter", link: "https://twitter.com/samplename", id: uuidv4() },
  { name: "facebook", link: "https://facebook.com/samplename", id: uuidv4() },
  { name: "youtube", link: "https://youtube.com/samplename", id: uuidv4() },
];

const TOOLSKILLS = [
  { name: "Click me to edit", id: uuidv4() },
  { name: "HTML", id: uuidv4() },
  { name: "CSS", id: uuidv4() },
  { name: "JavaScript", id: uuidv4() },
];

const SOFTSKILLS = [
  { name: "Click me to edit", id: uuidv4() },
  { name: "Adaptability", id: uuidv4() },
  { name: "Empathy", id: uuidv4() },
  { name: "Time Management", id: uuidv4() },
  { name: "Communication", id: uuidv4() },
];

const PERSONALINFO = {
  firstname: "SAMPLE",
  lastname: "NAME",
  job: "Full-stack web developer",
  email: "sampleemail@gmail.com",
  number: "(63)963-234667",
  address: "155 4th St. Ste 1050San Francisco, CA 94103, USA",
};

const Main = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [photoUploaded, setPhotoUploaded] = useState(null);
  const [description, setDescription] = useState(PLACEHOLDER);
  const [finalSocLinks, setFinalSocLinks] = useState(INITIALSOCLINKS);
  const [toolSkills, setToolSkills] = useState(TOOLSKILLS);
  const [softSkills, setSoftSkills] = useState(SOFTSKILLS);
  const [personalInfo, setPersonalInfo] = useState(PERSONALINFO);

  const editPrev = (e) => {
    setIsEditing(e);
  };

  const onUploadPhoto = (e) => {
    console.log(e.target.files[0]);
    setPhotoUploaded(e.target.files[0]);
  };

  const aboutMeHandler = (value) => {
    setDescription(value);
  };

  const soclLinkEditHandler = (inputLink, id) => {
    const updatedSocLinks = INITIALSOCLINKS.map((socLink) => {
      if (socLink.id === id) {
        socLink.link = inputLink;
      }
      return socLink;
    });
    setFinalSocLinks(updatedSocLinks);
  };

  const toolSkillEditHandler = (skillName, id) => {
    const updatedSkills = toolSkills.map((skill) => {
      if (skill.id === id) {
        skill.name = skillName;
      }
      return skill;
    });
    setToolSkills(updatedSkills);
  };

  const softSkillEditHandler = (skillName, id) => {
    const updatedSkills = softSkills.map((skill) => {
      if (skill.id === id) {
        skill.name = skillName;
      }
      return skill;
    });
    setSoftSkills(updatedSkills);
  };

  const addToolSkillHandler = (toolSkill) => {
    setToolSkills((prevToolSkills) => {
      return [...prevToolSkills, { name: toolSkill, id: uuidv4() }];
    });
  };

  const addSoftSkillHandler = (softSkill) => {
    setSoftSkills((prevSoftSkills) => {
      return [...prevSoftSkills, { name: softSkill, id: uuidv4() }];
    });
  };

  const delToolSkillHandler = (id) => {
    const updatedToolSkills = toolSkills.filter(
      (toolSkill) => toolSkill.id !== id
    );
    setToolSkills(updatedToolSkills);
  };

  const delSoftSkillHandler = (id) => {
    const updatedSoftSkills = softSkills.filter(
      (softSkill) => softSkill.id !== id
    );
    setSoftSkills(updatedSoftSkills);
  };

  const personalInfoChangeHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <MainWrapper>
      <BtnGrp
        onEditPrev={editPrev}
        onDownLoad
        editState={isEditing}
        role="button"
      ></BtnGrp>
      {isEditing ? (
        <EditForm
          onChange={onUploadPhoto}
          photo={photoUploaded}
          onAboutMe={aboutMeHandler}
          aboutMe={description}
          socLinks={finalSocLinks}
          onEditSocLink={soclLinkEditHandler}
          toolSkills={toolSkills}
          onEditToolSkill={toolSkillEditHandler}
          onEditSoftSkill={softSkillEditHandler}
          softSkills={softSkills}
          onAddToolSkill={addToolSkillHandler}
          onAddSoftSkill={addSoftSkillHandler}
          onDelToolSkill={delToolSkillHandler}
          onDelSoftSkill={delSoftSkillHandler}
          personalInfo={personalInfo}
          personalInfoChangeHandler={personalInfoChangeHandler}
        ></EditForm>
      ) : (
        <PrevForm
          photo={photoUploaded}
          aboutMe={description}
          socLinks={finalSocLinks}
          toolSkills={toolSkills}
          softSkills={softSkills}
          personalInfo={personalInfo}
        ></PrevForm>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: grid;
  justify-content: center;
  margin: auto;
  padding-top: 30rem;
  padding-bottom: 30rem;
`;

export default Main;
