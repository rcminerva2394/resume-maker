import React from 'react';
import styled from 'styled-components';

import Button from '../../Utils/Button';
import Input from '../../../UI/Input';

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
  const INPUT_DATA = [
    {
      type: 'text',
      name: 'position',
      placeholder: 'Job Role',
      onChange: (e) => onChange(e, id),
      value: experienceItem.position,
    },
    {
      type: 'text',
      name: 'company',
      placeholder: 'Company',
      onChange: (e) => onChange(e, id),
      value: experienceItem.company,
    },
    {
      type: 'text',
      name: 'from',
      placeholder: 'From',
      onChange: (e) => onChange(e, id),
      value: experienceItem.from,
    },
    {
      type: 'text',
      name: 'to',
      placeholder: 'To',
      onChange: (e) => onChange(e, id),
      value: experienceItem.to,
    },
  ];

  return (
    <ExperienceItemWrapper>
      {/* You can use this para DRY code mo */}
      {INPUT_DATA.map((inData) => (
        <Input key={inData.name} inData={inData} />
      ))}
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
