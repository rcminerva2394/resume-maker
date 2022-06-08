import React from "react";
import styled from "styled-components";

const UploadFile = ({ onChange }) => {
  return (
    <Label>
      <input type="file" name="my-photo" onChange={onChange}></input>
    </Label>
  );
};

const Label = styled.label`
  height: 51mm;
  width: 51mm;
`;

export default UploadFile;
