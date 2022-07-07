import React from "react";

import Button from "../Utils/Button";
import styled from "styled-components";
import { Icon } from "../Utils/Icon";

const BtnGrp = ({ onEditPrev, onPrint, editState }) => {
  return (
    <BtnGrpWrapper>
      <Button
        primary
        onClick={() => {
          onEditPrev(true);
        }}
      >
        Edit
      </Button>
      {editState && (
        <Button
          secondary
          onClick={() => {
            onEditPrev(false);
          }}
        >
          Preview
        </Button>
      )}
      {!editState && (
        <Button tertiary onClick={onPrint}>
          PDF <Icon name="download" />
        </Button>
      )}
    </BtnGrpWrapper>
  );
};

const BtnGrpWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10rem;
`;

export default BtnGrp;
