import React, { useState } from "react";

import styled from "styled-components";
import BtnGrp from "./BtnGrp/BtnGrp";
import EditForm from "./EditForm/EditForm";
import PrevForm from "./PrevForm/PrevForm";
import { v4 as uuidv4 } from "uuid";

const INITIALSOCLINKS = [
  { name: "linkedin", link: "https://linkedIn/samplename", id: uuidv4() },
  { name: "website", link: "www.samplename.com", id: uuidv4() },
  { name: "github", link: "https://github.com/samplename", id: uuidv4() },
  { name: "twitter", link: "https://twitter.com/samplename", id: uuidv4() },
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

  const soclLinkEditHandler = (inputLink, id) => {
    const updatedSocLinks = INITIALSOCLINKS.map((socLink) => {
      if (socLink.id === id) {
        socLink.link = inputLink;
      }
      return socLink;
    });
    setFinalSocLinks(updatedSocLinks);
    console.log(finalSocLinks);
  };

  const delLinkHandler = (id) => {
    const updatedSocLinks = finalSocLinks.filter(
      (socLink) => socLink.id !== id
    );
    setFinalSocLinks(updatedSocLinks);
  };

  const AddSoc = (socName) => {
    const checkSoc = finalSocLinks.find((socObj) => socObj.name === socName);

    if (!checkSoc) {
      let soc = INITIALSOCLINKS.find((socObj) => socObj.name === socName);
      if (soc === undefined) {
        alert("Please type either github, website, linkedln, or twitter");
      } else {
        setFinalSocLinks((prevSocLinks) => {
          return [...prevSocLinks, soc];
        });
      }
    } else {
      alert("Social account already exists");
    }
  };

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
          onDelLink={delLinkHandler}
          onAddSocLink={AddSoc}
        ></EditForm>
      ) : (
        <PrevForm
          photo={photoUploaded}
          aboutMe={description}
          socLinks={finalSocLinks}
        ></PrevForm>
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
