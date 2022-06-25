import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import UploadFile from "./UploadFile";
import AboutMe from "./AboutMe";
import WebSocList from "./WebSocLinks/WebSocList";
import Skills from "./Skills/Skills";

const EditForm = ({
  onChange,
  photo,
  onAboutMe,
  aboutMe,
  socLinks,
  onEditSocLink,
  onDelLink,
  onAddSocLink,
  toolSkills,
  onEditSkill,
  softSkills,
  onAddToolSkill,
  onAddSoftSkill,
}) => {
  return (
    <BondPaper>
      <SideBar>
        <UploadFile onChange={onChange} photo={photo}></UploadFile>
        <AboutMe onAboutMe={onAboutMe} aboutMe={aboutMe}></AboutMe>
        <WebSocList
          socLinks={socLinks}
          onEditSocLink={onEditSocLink}
          onDelLink={onDelLink}
          onAddSocLink={onAddSocLink}
        ></WebSocList>
        <Skills
          toolSkills={toolSkills}
          onEditSkill={onEditSkill}
          softSkills={softSkills}
          onAddToolSkill={onAddToolSkill}
          onAddSoftSkill={onAddSoftSkill}
        ></Skills>
      </SideBar>
    </BondPaper>
  );
};

export default EditForm;
