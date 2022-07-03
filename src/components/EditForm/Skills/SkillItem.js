import React, { useState } from "react";

import styled, { css } from "styled-components";
import Button from "../../Utils/Button";

const SkillItem = ({ id, skill, onEditSkill, onDelSkill }) => {
  const [isSkillEditing, setIsSkillEditing] = useState(false);
  const [editedSkill, setIsEditedSkill] = useState(skill);

  const editSkillHandler = () => {
    setIsSkillEditing(true);
  };

  const editSkillTextHandler = (e) => {
    setIsEditedSkill(e.target.value);
  };

  const submitEditedSkillHandler = (e) => {
    e.preventDefault();
    onEditSkill(editedSkill, id);
    setIsSkillEditing(false);
  };

  const deleteSkillHandler = () => {
    onDelSkill(id);
  }

  return (
    <>
      {isSkillEditing ? (
        <FormDeleteWrapper>
          <form onSubmit={submitEditedSkillHandler}>
            <label>
              <SkillInput
                type="text"
                placeholder={skill}
                onChange={editSkillTextHandler}
                value={editedSkill}
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
            onClick={deleteSkillHandler}
          >
            Del
          </Button>
        </FormDeleteWrapper>
      ) : (
        <SkillPiece onClick={editSkillHandler}>{skill}</SkillPiece>
      )}
    </>
  );
};

export default SkillItem;

const baseSkillStyle = css`
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 6.5rem 13rem;
  width: fit-content;
  color: white;
  border-radius: 4rem;
  text-align: center;
`;

const SkillPiece = styled.li`
  ${baseSkillStyle}
`;

const SkillInput = styled.input`
  ${baseSkillStyle}
  width: 75%;
`;

const FormDeleteWrapper = styled.div`
display: flex;
justify-content: flex-start; `