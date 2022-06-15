import React from "react";

import styled from "styled-components";

import {
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaTwitter,
  FaTrashAlt,
} from "react-icons/fa";

const WebSocItem = ({ id, link, name, onEditSocLink, onDelLink }) => {
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
      <input
        placeholder={link}
        value={link}
        onChange={(e) => onEditSocLink(e.target.value, id)}
      ></input>
      <DelIcon onClick={()=> onDelLink(id)} />
    </WebSocItemWrapper>
  );
};

const WebSocItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5rem;
  align-items: center;
`;

const DelIcon = styled(FaTrashAlt)`
  $:hover {
    color: red;
  }
`;
export default WebSocItem;
