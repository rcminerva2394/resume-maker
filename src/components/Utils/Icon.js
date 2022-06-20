import React from "react";

import {
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaGlobe,
  FaTwitter,
  FaPlus,
  FaTrashAlt
} from "react-icons/fa";

const icons = {
  download: FaDownload,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  website: FaGlobe,
  twitter: FaTwitter,
  plus: FaPlus,
  delete: FaTrashAlt
};

const Icon = ({ name, onClick }) => {
  const FinalIcon = icons[name];
    // return (
    // <FinalIcon onClick={onClick}></FinalIcon>
    // )
};

export default Icon;
