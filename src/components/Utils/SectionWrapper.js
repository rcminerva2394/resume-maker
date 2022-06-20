import React from "react";

import styled from "styled-components";

const SectionWrapper = ({ title, children }) => {
  return (
    <SectWrapper>
      <h2>{title}</h2>
      {children}
    </SectWrapper>
  );
};

const SectWrapper = styled.div`
  display: grid;
  margin: 5rem 20rem 0rem 20rem;
`;

export default SectionWrapper;
