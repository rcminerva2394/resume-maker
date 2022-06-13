import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import SectionWrapper from "../Utils/SectionWrapper";

const PrevForm = ({ photo, aboutMe }) => {
  return (
    <BondPaper>
      <SideBar>
        {photo ? (
          <img alt="profile-pic" src={URL.createObjectURL(photo)}></img>
        ) : (
          ""
        )}
        <SectionWrapper>
          <h2>About Me</h2>
          <p>{aboutMe}</p>
        </SectionWrapper>
      </SideBar>
    </BondPaper>
  );
};

export default PrevForm;
