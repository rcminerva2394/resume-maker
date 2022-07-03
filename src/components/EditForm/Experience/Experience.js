import React from "react";

import SectionWrapper from "../../Utils/SectionWrapper";
import ExperienceItem from "./ExperienceItem";
import Button from "../../Utils/Button";

import styled from "styled-components";

const Experience = ({
  experience,
  onChangeExperience,
  onDeleteExperience,
  onAddExperience,
}) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChangeExperience}
      onDelete={onDeleteExperience}
    />
  ));
  return (
    <SectionWrapper title="Experience" isMain={true}>
      <ButtonWrapper>
        <Button
          onClick={onAddExperience}
          tertiary
          padding={"auto"}
          margin={"5rem"}
        >
          Add Experience
        </Button>{" "}
      </ButtonWrapper>
      {experienceItems}
    </SectionWrapper>
  );
};

const ButtonWrapper = styled.div`
  justify-self: start;
  margin-bottom: 15rem;
  margin-left: -5rem;
`;
export default Experience;
