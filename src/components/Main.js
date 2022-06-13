import React, { useState } from "react";

import styled from "styled-components";
import BtnGrp from "./BtnGrp/BtnGrp";
import EditForm from "./EditForm/EditForm";
import PrevForm from "./PrevForm/PrevForm";
import { v4 as uuidv4 } from "uuid";

const INITIALSOCLINKS = [
  { name: "linkedln", link: "https://linkedIn/samplename", id: uuidv4() },
  { name: "website", link: "www.samplename.com", id: uuidv4() },
  { name: "github", link: "https://github.com/samplename", id: uuidv4() }
];

const Main = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [photoUploaded, setPhotoUploaded] = useState(null);
  const [description, setDescription] = useState("");
  const [finalSocLinks, setFinalSocLinks] = useState(INITIALSOCLINKS);

  const editPrev = (e) => {
    setIsEditing(e);
  };

  const onUploadPhoto = (e) => {
    console.log(e.target.files[0]);
    setPhotoUploaded(e.target.files[0]);
  };

  const aboutMeHandler = (value) => {
    setDescription(value);
  };

  const soclLinkEditHandler = (link) => {

  }


  return (
    <MainWrapper>
      <BtnGrp
        onEditPrev={editPrev}
        onDownLoad
        editState={isEditing}
        role="button"
      ></BtnGrp>
      {isEditing ? (
        <EditForm
          onChange={onUploadPhoto}
          photo={photoUploaded}
          onAboutMe={aboutMeHandler}
          aboutMe={description}
          socLinks={finalSocLinks}
          onEditSocLink={soclLinkEditHandler}
        ></EditForm>
      ) : (
        <PrevForm photo={photoUploaded} aboutMe={description}></PrevForm>
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
