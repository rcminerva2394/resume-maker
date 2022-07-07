import React, { useContext } from "react";

import styled from "styled-components";
import { ThemeColor } from "../Main";

const Skills = ({ skills, title }) => {
  const { hexTheme } = useContext(ThemeColor);

  return (
    <div>
      <p>
        <i>{title}</i>
      </p>
      <SkillsListWrapper>
        {skills.map((skill) => (
          <SkillItemWRapper key={skill.id} color={hexTheme}>
            {skill.name}
          </SkillItemWRapper>
        ))}
      </SkillsListWrapper>
    </div>
  );
};

const SkillsListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5rem;
  flex-wrap: wrap;
`;

const SkillItemWRapper = styled.li`
  border: none;
  background-color: ${(props) => props.color};
  padding: 6.5rem 13rem;
  width: fit-content;
  color: white;
  border-radius: 4rem;
  text-align: center;
`;

export default Skills;
