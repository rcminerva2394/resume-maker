import React from "react";
import BondPaper from "../Utils/BondPaper";

const PrevForm = ({ photo }) => {
  return (
    <BondPaper>
      <p>This is the preview of your resume </p>
      <img alt="profile-pic" src={URL.createObjectURL(photo)}></img>
    </BondPaper>
  );
};

export default PrevForm;
