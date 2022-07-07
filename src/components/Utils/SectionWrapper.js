import React, { useContext } from "react";

import styled from "styled-components";
import { ThemeColor } from "../Main";

const SectionWrapper = ({ title, children, isLast, isMain }) => {
  const { hexTheme } = useContext(ThemeColor);
  return (
    <SectWrapper isLast={isLast} isMain={isMain}>
      <Title color={hexTheme}>{title}</Title>
      {children}
    </SectWrapper>
  );
};

const SectWrapper = styled.section`
  display: grid;
  margin: ${(props) =>
    props.isMain ? "5rem 0rem 0rem 5rem" : "5rem 25rem 0rem 5rem"};
  padding-bottom: 10rem;
  border-bottom: ${(props) => (props.isLast ? "none" : "2px solid #F2F2F2")};
`;

const Title = styled.h2`
  color: ${(props) => props.color};
`;
export default SectionWrapper;
