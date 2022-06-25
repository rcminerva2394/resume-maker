import React from "react";

import { Icon } from "../../Utils/Icon";
import Button from "../../Utils/Button";

const WebSocItem = ({ id, link, name, onEditSocLink, onDelLink }) => {
  return (
    <li>
      <Icon name={name} />
      <input
        type="text"
        placeholder={link}
        value={link}
        onChange={(e) => onEditSocLink(e.target.value, id)}
      ></input>
      <Button onClick={() => onDelLink(id)} padding={"auto"} margin={"-5rem"}>
        <Icon name="delete" />
      </Button>
    </li>
  );
};

export default WebSocItem;
