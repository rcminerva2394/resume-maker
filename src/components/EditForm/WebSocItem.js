import React from "react";

import styled from "styled-components";
import Icon from "../Utils/Icon";

const WebSocItem = ({ id, link, name, onEditSocLink, onDelLink }) => {
  return (
    <WebSocItemWrapper>
      <Icon name={name}/>
      <input
        placeholder={link}
        value={link}
        onChange={(e) => onEditSocLink(e.target.value, id)}
      ></input>
      <Icon name="delete" onClick={() => onDelLink(id)}/>
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

export default WebSocItem;
