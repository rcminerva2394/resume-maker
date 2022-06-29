import React from "react";

import styled from "styled-components";

import SkillItem from "./SkillItem";

const SkillsList = ({ skills, onEditSkill, onDelSkill}) => {
  return (
    <SkillsListWrapper>
      {skills.map((skill) => (
        <SkillItem key={skill.id} id={skill.id} onEditSkill={onEditSkill} skill={skill.name} onDelSkill={onDelSkill}/>
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
