import React, { useState, useContext } from "react";

import AddInput from "../../Utils/AddInput";
import { SkillsContext } from "../../Main";
import { v4 as uuidv4 } from "uuid";

const AddSkill = ({ type, title, placeholder }) => {
  const { setSkills } = useContext(SkillsContext);
  const [newSkill, setNewSkill] = useState("");

  const newSkillHandler = (e) => {
    setNewSkill(e.target.value);
  };

  const addSkillHandler = (e) => {
    e.preventDefault();
    setSkills((prevSkills) => {
      return {
        ...prevSkills,
        [type]: [...prevSkills[type], { name: newSkill, id: uuidv4() }],
      };
    });
  };

  return (
    <div>
      <p>
        <i>{title}</i>
      </p>
      <AddInput
        placeholder={placeholder}
        onSubmit={addSkillHandler}
        onChange={newSkillHandler}
      />
    </div>
  );
};

export default AddSkill;
