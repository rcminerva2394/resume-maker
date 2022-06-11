import React, { useState } from "react";

import styled from "styled-components";
import BtnGrp from "./BtnGrp/BtnGrp";
import EditForm from "./EditForm/EditForm";
import PrevForm from "./PrevForm/PrevForm";

const Main = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [photoUploaded, setPhotoUploaded] = useState(null);

  const onUploadPhoto = (e) => {
    console.log(e.target.files[0]);
    setPhotoUploaded(e.target.files[0]);
  };

  const EditPrev = (e) => {
    setIsEditing(e);
  };

  return (
    <MainWrapper>
      <BtnGrp onEditPrev={EditPrev} onDownLoad editState={isEditing} role="button"></BtnGrp>
      {isEditing ? (
        <EditForm onChange={onUploadPhoto}></EditForm>
      ) : (
        <PrevForm photo={photoUploaded}></PrevForm>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: grid;
  justify-content: center;
  margin: auto;
  padding-top: 30rem;
  padding-bottom: 30rem;

`;

export default Main;
