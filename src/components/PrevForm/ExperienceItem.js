import React from "react";

import styled from "styled-components";

const ExperienceItem = ({ experienceItem }) => {
  return (
    <ExperienceItemWrapper>
      <div>
        <h3>{experienceItem.position}</h3>
        <p>{experienceItem.company}</p>
        <Period>
          {experienceItem.from} to {experienceItem.to}
        </Period>
      </div>
      <Description>{experienceItem.description}</Description>
    </ExperienceItemWrapper>
  );
};

const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.5;
  margin-top: 15rem;
`;

const Period = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Description = styled.p`
  line-height: 1.4;
`;

export default ExperienceItem;
