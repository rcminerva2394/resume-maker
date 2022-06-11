import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import UploadFile from "../Utils/UploadFile";

const EditForm = ({ onChange }) => {
  return (
    <BondPaper>
      <SideBar>
        <UploadFile onChange={onChange}></UploadFile>
      </SideBar>
    </BondPaper>
  );
};

export default EditForm;
