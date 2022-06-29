import React from "react";

import { Icon } from "../../Utils/Icon";

const WebSocItem = ({ id, link, name, onEditSocLink }) => {
  return (
    <li>
      <Icon name={name} />
      <input
        type="text"
        placeholder={link}
        value={link}
        onChange={(e) => onEditSocLink(e.target.value, id)}
      ></input>
    </li>
  );
};

export default WebSocItem;
