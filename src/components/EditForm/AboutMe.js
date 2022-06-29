import React from "react";

import SectionWrapper from "../Utils/SectionWrapper";

const AboutMe = ({ onAboutMe, aboutMe }) => {
  return (
    <SectionWrapper title="About Me">
      <textarea
        placeholder="Write something about yourself of not more than 250 characters"
        rows="5"
        autoCorrect="on"
        maxLength="250"
        value={aboutMe}
        onChange={(e) => onAboutMe(e.target.value)}
      ></textarea>
    </SectionWrapper>
  );
};

export default AboutMe;
