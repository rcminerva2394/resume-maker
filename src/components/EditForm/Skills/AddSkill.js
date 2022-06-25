import React, { useState } from "react";

import AddInput from "../../Utils/AddInput";

const AddSkill = ({ title, placeholder, onSubmitSkill }) => {
  const [newSkill, setNewSkill] = useState("");

  const onChange = (e) => {
    setNewSkill(e.target.value);
  };

  const submitSkill = (e) => {
    e.preventDefault();
    onSubmitSkill(newSkill);
  };
  return (
    <div>
      <p>
        <i>{title}</i>
      </p>
      <AddInput
        placeholder={placeholder}
        onSubmit={submitSkill}
        onChange={onChange}
      />
    </div>
  );
};

export default AddSkill;
