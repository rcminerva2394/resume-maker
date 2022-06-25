import React from "react";

import styled from "styled-components";

const SkillsList = ({ skills, onChange }) => {
  return (
    <SkillsListWrapper>
      {skills.map((skill) => (
        <li key={skill.id}>
          <SkillInput
            onChange={(e) => onChange(e.target.value, skill.id)}
            type="text"
            value={skill.name}
            size={skill.name.length - 2}
            max-maxLength={skill.name.length}
          />
        </li>
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

const SkillInput = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 6.5rem 13rem;
  width: fit-content;
  color: white;
  border-radius: 4rem;
  text-align: center;
`;
export default SkillsList;
