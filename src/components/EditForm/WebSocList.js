import React from "react";

import SectionWrapper from "../Utils/SectionWrapper";
import WebSocItem from "./WebSocItem";

const WebSocList = ({ socLinks, onEditSocLink, onDelLink }) => {
  return (
    <SectionWrapper>
      <h2>Website & Social Links</h2>
      <ul>
        {socLinks.map((soc) => (
          <WebSocItem
            key={soc.id}
            id={soc.id}
            link={soc.link}
            name={soc.name}
            onEditSocLink={onEditSocLink}
            onDelLink={onDelLink}
          ></WebSocItem>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default WebSocList;
