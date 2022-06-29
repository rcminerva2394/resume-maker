import React from "react";

import { Icon } from "../Utils/Icon";

const WebSocItem = ({ link, id, name }) => {
  return (
    <>
      {" "}
      {link !== "" ? (
        <li key={id}>
          <Icon name={name} />
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default WebSocItem;
