import React from "react";

import { Icon } from "../Utils/Icon";

const WebSocItem = ({ id, link, name, onEditSocLink, onDelLink }) => {
  return (
    <li>
      <Icon name={name} color={"#645D5D"}/>
      <input
        placeholder={link}
        value={link}
        onChange={(e) => onEditSocLink(e.target.value, id)}
      ></input>
      <Icon name="delete" onClick={() => onDelLink(id)} color={"red"} />
    </li>
  );
};

export default WebSocItem;
