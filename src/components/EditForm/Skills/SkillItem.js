import React, { useState, useContext } from "react";

import styled, { css } from "styled-components";
import Button from "../../Utils/Button";
import { SkillsContext, ThemeColor } from "../../Main";

const SkillItem = ({ type, id, skill }) => {
  const [isSkillEditing, setIsSkillEditing] = useState(false);
  const [editedSkill, setIsEditedSkill] = useState(skill);
  const { skills, setSkills } = useContext(SkillsContext);
  const {hexTheme} = useContext(ThemeColor)

  const editSkillHandler = () => {
    setIsSkillEditing(true);
  };

  const editSkillTextHandler = (e) => {
    setIsEditedSkill(e.target.value);
  };

  const delSkillHandler = () => {
    const updatedSkills = skills[type].filter((skill) => skill.id !== id);

    setSkills((prevSkills) => {
      return {
        ...prevSkills,
        [type]: [...updatedSkills],
      };
    });
  };

  const skillsEditHandler = (e) => {
    e.preventDefault();
    const updatedSkills = skills[type].map((skill) => {
      if (skill.id === id) {
        skill.name = editedSkill;
      }
      return skill;
    });
    setSkills((prevSkills) => {
      return {
        ...prevSkills,
        [type]: [...updatedSkills],
      };
    });
    setIsSkillEditing(false);
  };

  return (
    <>
      {isSkillEditing ? (
        <FormDeleteWrapper>
          <form onSubmit={skillsEditHandler}>
            <label>
              <SkillInput
                type="text"
                placeholder={skill}
                onChange={editSkillTextHandler}
                value={editedSkill}
                color={hexTheme}
              ></SkillInput>
            </label>
            <Button
              type="submit"
              height={"28px"}
              padding={"auto"}
              fontSize={"12rem"}
              primary
            >
              Save
            </Button>
          </form>
          <Button
            height={"28px"}
            padding={"auto"}
            fontSize={"12rem"}
            onClick={delSkillHandler}
          >
            Del
          </Button>
        </FormDeleteWrapper>
      ) : (
        <SkillPiece onClick={editSkillHandler} color={hexTheme}>{skill}</SkillPiece>
      )}
    </>
  );
};

export default SkillItem;

const baseSkillStyle = css`
  border: none;
  padding: 6.5rem 13rem;
  width: fit-content;
  color: white;
  border-radius: 4rem;
  text-align: center;
`;

const SkillPiece = styled.li`
  ${baseSkillStyle}
  background-color: ${props => props.color}
`;

const SkillInput = styled.input`
  ${baseSkillStyle}
  width: 75%;
  background-color: ${props => props.color}
`;

const FormDeleteWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
