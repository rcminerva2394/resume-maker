import React from "react";
import BondPaper from "../Utils/BondPaper";
import UploadFile from "../Utils/UploadFile";

const EditForm = ({ onChange }) => {
  return (
    <BondPaper>
      <h3>This is the editable resume</h3>
      <UploadFile onChange={onChange}></UploadFile>
    </BondPaper>
  );
};

export default EditForm;
