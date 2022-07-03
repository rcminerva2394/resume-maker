import React from "react";

import styled from "styled-components";
import image from "../../assets/sample-photo.png";

const UploadFile = ({ onChange, photo }) => {
  return (
    <Label photo={photo}>
      <Placeholder>
        Upload<br></br>Photo
      </Placeholder>
      <InputWrapper
        type="file"
        name="my-photo"
        onChange={onChange}
      ></InputWrapper>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: 42mm;
  height: 42mm;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  position: relative;
  left: 45%;
  transform: translateX(-50%);
  background-image: url(${image});
  background-repeat: no-repeat;
`;

const InputWrapper = styled.input`
  display: none;
`;

const Placeholder = styled.p`
  position: absolute;
  z-index: 30;
  margin-top: 70rem;
  margin-left: 60rem;
  font-size: 12rem;
  color: white;
  text-align: center;
`;

export default UploadFile;
