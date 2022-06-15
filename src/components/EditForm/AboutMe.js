import React from "react";

import SectionWrapper from "../Utils/SectionWrapper";

const AboutMe = ({onAboutMe, aboutMe}) => {
   
  return (
    <SectionWrapper>
      <h2>About Me</h2>
      <textarea
        placeholder="Write something about yourself of not more than 200 characters"
        rows="5"
        cols="7"
        autoCorrect="on"
        maxLength="200"
        value={aboutMe}
        onChange={(e) => onAboutMe(e.target.value)}
      ></textarea>
    </SectionWrapper>
  );
};

export default AboutMe;
