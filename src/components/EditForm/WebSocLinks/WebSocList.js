import React from "react";

import SectionWrapper from "../../Utils/SectionWrapper";
import WebSocItem from "./WebSocItem";

const WebSocList = ({ socLinks, onEditSocLink }) => {
  return (
    <SectionWrapper title="Website & Social Links">
      <ul>
        {socLinks.map((soc) => (
          <WebSocItem
            key={soc.id}
            id={soc.id}
            link={soc.link}
            name={soc.name}
            onEditSocLink={onEditSocLink}
          ></WebSocItem>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default WebSocList;
