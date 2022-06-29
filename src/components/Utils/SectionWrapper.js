import React from "react";

import styled from "styled-components";

const SectionWrapper = ({ title, children, isLast }) => {
  return (
    <SectWrapper isLast={isLast}>
      <h2>{title}</h2>
      {children}
    </SectWrapper>
  );
};

const SectWrapper = styled.section`
  display: grid;
  margin: 5rem 25rem 0rem 5rem;
  padding-bottom: 10rem;
  border-bottom: ${(props) =>
    props.isLast
      ? "none"
      : "2px solid #F2F2F2" };
`;

export default SectionWrapper;
