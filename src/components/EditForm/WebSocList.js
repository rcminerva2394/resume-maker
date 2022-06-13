import React from "react";

import SectionWrapper from "../Utils/SectionWrapper";
import WebSocItem from "./WebSocItem";

const WebSocList = ({socLinks, onEditSocLink}) => {
  return (
    <SectionWrapper>
      <h2>Website & Social Links</h2>
      <ul>
        {socLinks.map((soc) => (
          <WebSocItem key={soc.id} link={soc.link} name={soc.name} onEditSocLink={onEditSocLink}></WebSocItem>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default WebSocList;
