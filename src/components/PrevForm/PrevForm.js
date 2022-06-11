import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";

const PrevForm = ({ photo }) => {
  return (
    <BondPaper>
      <SideBar>
        {photo ? (
          <img alt="profile-pic" src={URL.createObjectURL(photo)}></img>
        ) : (
          ""
        )}
      </SideBar>
    </BondPaper>
  );
};

export default PrevForm;
