import React from "react";

import SectionWrapper from "../../Utils/SectionWrapper";
import AddSkill from "./AddSkill";
import SkillsList from "./SkillsList";

const Skills = ({
  toolSkills,
  onEditToolSkill,
  onEditSoftSkill,
  softSkills,
  onAddToolSkill,
  onAddSoftSkill,
  onDelToolSkill,
  onDelSoftSkill
}) => {
  return (
    <SectionWrapper title={"Skills"} isLast={true}>
      <AddSkill
        title={"Tools"}
        placeholder={"Add a new tool"}
        onSubmitSkill={onAddToolSkill}
      />
      <SkillsList skills={toolSkills} onEditSkill={onEditToolSkill} onDelSkill={onDelToolSkill}/>
      <AddSkill
        title={"Soft Skills"}
        placeholder={"Add a new skill"}
        onSubmitSkill={onAddSoftSkill}
      />
      <SkillsList skills={softSkills} onEditSkill={onEditSoftSkill} onDelSkill={onDelSoftSkill}/>
    </SectionWrapper>
  );
};

export default Skills;
