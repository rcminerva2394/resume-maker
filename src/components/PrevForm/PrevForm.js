import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import SectionWrapper from "../Utils/SectionWrapper";
import { Icon } from "../Utils/Icon";

const PrevForm = ({ photo, aboutMe, socLinks, toolSkills, softSkills }) => {
  return (
    <BondPaper>
      <SideBar>
        <img
          alt="profile-pic"
          src={photo ? URL.createObjectURL(photo) : null}
        ></img>
        <SectionWrapper title="About Me">
          <p>{aboutMe}</p>
        </SectionWrapper>
        <SectionWrapper title="Website & Social Links">
          <ul>
            {socLinks.map((socLink) => (
              <li key={socLink.id}>
                <Icon name={socLink.name} color={"#645D5D"} />
                <a
                  href={socLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socLink.link}
                </a>
              </li>
            ))}
          </ul>
        </SectionWrapper>
        <SectionWrapper title="Skills">
          ul
        </SectionWrapper>
      </SideBar>
    </BondPaper>
  );
};

export default PrevForm;
