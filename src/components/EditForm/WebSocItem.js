import React from "react";

import { Icon } from "../Utils/Icon";

const WebSocItem = ({ id, link, name, onEditSocLink, onDelLink }) => {
  return (
    <li>
      <Icon name={name} />
      <input
        placeholder={link}
        value={link}
        onChange={(e) => onEditSocLink(e.target.value, id)}
      ></input>
      <Icon name="delete" onClick={() => onDelLink(id)} />
    </li>
  );
};

export default WebSocItem;
