import React from "react";

import styled from "styled-components";

import {
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaTwitter,
  FaTrashAlt,
} from "react-icons/fa";

const WebSocItem = ({ link, name, onEditSocLink }) => {
  return (
    <WebSocItemWrapper>
      {name === "linkedln" ? (
        <FaLinkedin />
      ) : name === "website" ? (
        <FaGlobe />
      ) : name === "github" ? (
        <FaGithub />
      ) : (
        <FaTwitter />
      )}
      <input placeholder={link} onChange={(e) => onEditSocLink(e.target.value)}></input>
      <FaTrashAlt />
    </WebSocItemWrapper>
  );
};

const WebSocItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
`;
export default WebSocItem;
