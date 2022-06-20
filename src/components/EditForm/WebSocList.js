import React, { useState } from "react";

import SectionWrapper from "../Utils/SectionWrapper";
import WebSocItem from "./WebSocItem";
import AddInput from "../Utils/AddInput";

const WebSocList = ({ socLinks, onEditSocLink, onDelLink, onAddSocLink }) => {
  const [addedSoc, setAddedSoc] = useState("");

  const onAddSoc = (e) => {
    setAddedSoc(e.target.value.toLowerCase());
    console.log(e.target.value)
  };

  const addNewSoc = (e) => {
    e.preventDefault();
    onAddSocLink(addedSoc);
  };

  return (
    <SectionWrapper title="Website & Social Links">
      <AddInput
        onChange={onAddSoc}
        onSubmit={addNewSoc}
        placeholder={"Twitter, Linkedln, Website, Github"}
      ></AddInput>
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
