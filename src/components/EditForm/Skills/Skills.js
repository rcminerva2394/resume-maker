import React from "react";

import SectionWrapper from "../../Utils/SectionWrapper";
import AddSkill from "./AddSkill";
import SkillsList from "./SkillsList";

const Skills = ({
  toolSkills,
  onEditSkill,
  softSkills,
  onAddToolSkill,
  onAddSoftSkill,
}) => {
  return (
    <SectionWrapper title={"Skills"}>
      <AddSkill
        title={"Tools"}
        placeholder={"Add a new tool or edit below"}
        onSubmitSkill={onAddToolSkill}
      />
      <SkillsList skills={toolSkills} onChange={onEditSkill} />
      <AddSkill
        title={"Soft Skills"}
        placeholder={"Add a soft skill or edit below"}
        onSubmitSkill={onAddSoftSkill}
      />
      <SkillsList skills={softSkills} onChange />
    </SectionWrapper>
  );
};

export default Skills;
