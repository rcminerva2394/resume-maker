import React from "react";

import SideBar from "../Utils/SideBar";
import SectionWrapper from "../Utils/SectionWrapper";
import Skills from "./Skills";
import WebSocItem from "./WebSocItem";
import MainContent from "../Utils/MainContent";
import PersonalInfo from "./PersonalInfo";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";

import styled from "styled-components";

const PrevForm = React.forwardRef(
  (
    {
      photo,
      aboutMe,
      socLinks,
      toolSkills,
      softSkills,
      personalInfo,
      experience,
      education,
    },
    ref
  ) => {
    const experienceItems = experience.map((experienceItem) => (
      <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
    ));

    const educationItems = education.map((educationItem) => (
      <EducationItem key={educationItem.id} educationItem={educationItem} />
    ));

    const socLinkItems = socLinks.map((socLink) => (
      <WebSocItem link={socLink.link} key={socLink.id} name={socLink.name} />
    ));

    return (
      <BondPaper ref={ref}>
        <SideBar>
          <img alt="profile-pic" src={photo ? photo : null}></img>
          <SectionWrapper title="About Me">
            <p>{aboutMe}</p>
          </SectionWrapper>
          <SectionWrapper title="Website & Social Links">
            <ul>{socLinkItems}</ul>
          </SectionWrapper>
          <SectionWrapper title="Skills" isLast={true}>
            <Skills skills={toolSkills} title={"Tools"}></Skills>
            <Skills skills={softSkills} title={"Soft Skills"}></Skills>
          </SectionWrapper>
        </SideBar>
        <MainContent>
          <PersonalInfo personalInfo={personalInfo} />
          <SectionWrapper title="Experience" isMain={true}>
            {experienceItems}
          </SectionWrapper>
          <SectionWrapper title="Education" isMain={true} isLast={true}>
            {educationItems}
          </SectionWrapper>
        </MainContent>
      </BondPaper>
    );
  }
);

const BondPaper = styled.div`
  display: flex;
  flex-direction: row;
  width: 210mm;
  height: ${(props) => (props.isEditForm ? "100%" : "297mm")};
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20rem 20rem 20rem 20rem;
`;
export default PrevForm;
