import React from "react";

import styled from "styled-components";
import SkillItem from "./SkillItem";

const SkillsList = ({ type, skills }) => {
  return (
    <SkillsListWrapper>
      {skills.map((skill) => (
        <SkillItem
          type={type}
          key={skill.id}
          id={skill.id}
          skill={skill.name}
        />
      ))}
    </SkillsListWrapper>
  );
};

const SkillsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5rem;
  flex-wrap: wrap;
`;

export default SkillsList;
