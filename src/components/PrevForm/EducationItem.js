import React from "react";

import styled from "styled-components";

const EducationItem = ({ educationItem }) => {
  return (
    <EducationWrapper>
      <h3>{educationItem.course}</h3>
      <p>{educationItem.school}</p>
      <Period>
        {educationItem.from} to {educationItem.to}
      </Period>
    </EducationWrapper>
  );
};

const Period = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const EducationWrapper = styled.div`
  line-height: 0.5;
  margin-top: 15rem;
`;
export default EducationItem;
