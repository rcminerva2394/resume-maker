import React from "react";

import styled from "styled-components";

import {
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaGlobe,
  FaTwitter,
  FaPlus,
  FaTrashAlt,
} from "react-icons/fa";

const icons = {
  download: FaDownload,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  website: FaGlobe,
  twitter: FaTwitter,
  plus: FaPlus,
  delete: FaTrashAlt,
};

export const Icon = ({ name, onClick, fontSize, color }) => {
  const FinalIcon = icons[name];

  const FinalStyledIcon = styled(FinalIcon)`
  font-size: ${fontSize || "inherit"};
  color: ${ color || 'inherit'};
  `
  return (   
     <FinalStyledIcon onClick={onClick}></FinalStyledIcon> 
  );
};

