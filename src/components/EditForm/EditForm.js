import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import UploadFile from "./UploadFile";
import AboutMe from "./AboutMe";
import WebSocList from "./WebSocLinks/WebSocList";
import Skills from "./Skills/Skills";
import MainContent from "../Utils/MainContent";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

const EditForm = ({
  onUploadPhoto,
  photo,
  onAboutMe,
  aboutMe,
  socLinks,
  onEditSocLink,
  skills,

  // onDelSkill,

  personalInfo,
  onChangePersonalInfo,
  experience,
  onChangeExperience,
  onDeleteExperience,
  onAddExperience,
  education,
  onChangeEducation,
  onDeleteEducation,
  onAddEducation,
}) => {
  return (
    <BondPaper isEditForm={true}>
      <SideBar>
        <UploadFile onUploadPhoto={onUploadPhoto} photo={photo}></UploadFile>
        <AboutMe onAboutMe={onAboutMe} aboutMe={aboutMe}></AboutMe>
        <WebSocList
          socLinks={socLinks}
          onEditSocLink={onEditSocLink}
        ></WebSocList>
        <Skills
          skills={skills}
        ></Skills>
      </SideBar>
      <MainContent>
        <PersonalInfo
          personalInfo={personalInfo}
          onChangePersonalInfo={onChangePersonalInfo}
        />
        <Experience
          experience={experience}
          onChangeExperience={onChangeExperience}
          onDeleteExperience={onDeleteExperience}
          onAddExperience={onAddExperience}
        ></Experience>
        <Education
          education={education}
          onChangeEducation={onChangeEducation}
          onDeleteEducation={onDeleteEducation}
          onAddEducation={onAddEducation}
        ></Education>
      </MainContent>
    </BondPaper>
  );
};

export default EditForm;
