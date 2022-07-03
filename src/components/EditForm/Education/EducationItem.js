import React from "react";

import Button from "../../Utils/Button";
import styled from "styled-components";

const EducationItem = ({ id, onChange, educationItem, onDelete }) => {
  return (
    <EducationItemWrapper>
      <input
        type="text"
        name="course"
        placeholder="Course Name or Bachelor's Degree"
        onChange={(e) => onChange(e, id)}
        value={educationItem.course}
      ></input>
      <input
        type="text"
        name="school"
        placeholder="School or University Name"
        onChange={(e) => onChange(e, id)}
        value={educationItem.school}
      ></input>
      <input
        type="text"
        name="from"
        placeholder="From"
        onChange={(e) => onChange(e, id)}
        value={educationItem.from}
      ></input>
      <input
        type="text"
        name="to"
        placeholder="To"
        onChange={(e) => onChange(e, id)}
        value={educationItem.to}
      ></input>
      <Button onClick={() => onDelete(id)} padding={"auto"}>
        Delete
      </Button>
    </EducationItemWrapper>
  );
};

const EducationItemWrapper = styled.div`
  margin-bottom: 15rem;
  display: flex;
  flex-direction: column;
`;
export default EducationItem;
