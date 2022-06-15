import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import UploadFile from "./UploadFile";
import AboutMe from "./AboutMe";
import WebSocList from "./WebSocList";

const EditForm = ({
  onChange,
  photo,
  onAboutMe,
  aboutMe,
  socLinks,
  onEditSocLink,
  onDelLink,
}) => {
  return (
    <BondPaper>
      <SideBar>
        <UploadFile onChange={onChange} photo={photo}></UploadFile>
        <AboutMe onAboutMe={onAboutMe} aboutMe={aboutMe}></AboutMe>
        <WebSocList
          socLinks={socLinks}
          onEditSocLink={onEditSocLink}
          onDelLink={onDelLink}
        ></WebSocList>
      </SideBar>
    </BondPaper>
  );
};

export default EditForm;
