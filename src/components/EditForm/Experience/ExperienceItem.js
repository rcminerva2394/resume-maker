import React from 'react';
import styled from 'styled-components';

import Button from '../../Utils/Button';

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
  return (
    <ExperienceItemWrapper>
      <input
        type="text"
        name="position"
        placeholder="Job Role"
        onChange={(e) => onChange(e, id)}
        value={experienceItem.position}
      ></input>
      <input
        type="text"
        name="company"
        placeholder="Company"
        onChange={(e) => onChange(e, id)}
        value={experienceItem.company}
      ></input>
      <input
        type="text"
        name="from"
        placeholder="From"
        onChange={(e) => onChange(e, id)}
        value={experienceItem.from}
      ></input>
      <input
        type="text"
        name="to"
        placeholder="To"
        onChange={(e) => onChange(e, id)}
        value={experienceItem.to}
      ></input>
      <textarea
        name="description"
        placeholder="Description in 200 characters"
        onChange={(e) => onChange(e, id)}
        value={experienceItem.description}
        rows="3"
        maxLength={'200'}
      ></textarea>
      <ButtonWrapper>
        <Button onClick={() => onDelete(id)} padding={'auto'}>
          Del
        </Button>
      </ButtonWrapper>
    </ExperienceItemWrapper>
  );
};

const ExperienceItemWrapper = styled.div`
  margin-bottom: 15rem;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default ExperienceItem;
