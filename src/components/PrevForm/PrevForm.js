import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import SectionWrapper from "../Utils/SectionWrapper";

const PrevForm = ({ photo, aboutMe, socLinks }) => {
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
              <li>
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
      </SideBar>
    </BondPaper>
  );
};

export default PrevForm;
