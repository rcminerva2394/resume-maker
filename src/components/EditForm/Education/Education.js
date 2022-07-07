import React from "react";

import EducationItem from "./EducationItem";
import SectionWrapper from "../../Utils/SectionWrapper";
import Button from "../../Utils/Button";
import styled from "styled-components";
import { Icon } from "../../Utils/Icon";

const Education = ({
  education,
  onChangeEducation,
  onDeleteEducation,
  onAddEducation,
}) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      onChange={onChangeEducation}
      educationItem={educationItem}
      onDelete={onDeleteEducation}
    ></EducationItem>
  ));

  return (
    <SectionWrapper title="Education" isMain={true}>
      <ButtonWrapper>
        <Button
          onClick={onAddEducation}
          tertiary
          padding={"auto"}
          margin={"5rem"}
        >
          <Icon name="plus" /> Add Education
        </Button>
      </ButtonWrapper>
      {educationItems}
    </SectionWrapper>
  );
};

const ButtonWrapper = styled.div`
  justify-self: start;
  margin-bottom: 15rem;
  margin-left: -5rem;
`;

export default Education;
