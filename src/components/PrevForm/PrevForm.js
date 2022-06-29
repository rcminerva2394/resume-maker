import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import SectionWrapper from "../Utils/SectionWrapper";
import Skills from "./Skills";
import WebSocItem from "./WebSocItem";
import MainContent from "../Utils/MainContent";
import PersonalInfo from "./PersonalInfo";

const PrevForm = ({ photo, aboutMe, socLinks, toolSkills, softSkills, personalInfo }) => {
  return (
    <BondPaper>
      <SideBar>
        <img
          alt="profile-pic"
          src={photo ? URL.createObjectURL(photo) : null}
        ></img>
        <SectionWrapper title="About Me">
          <p>{aboutMe}</p>
        </SectionWrapper>
        <SectionWrapper title="Website & Social Links">
          <ul>
            {socLinks.map((socLink) => (
              <WebSocItem link={socLink.link} id={socLink.id} name={socLink.name} />
            ))}
          </ul>
        </SectionWrapper>
        <SectionWrapper title="Skills" isLast={true}>
          <Skills skills={toolSkills} title={"Tools"}></Skills>
          <Skills skills={softSkills} title={"Soft Skills"}></Skills>
        </SectionWrapper>
      </SideBar>
      <MainContent>
        <PersonalInfo personalInfo={personalInfo}/>
      </MainContent>
    </BondPaper>
  );
};

export default PrevForm;
