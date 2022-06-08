import React from "react";
import styled from "styled-components";

const BondPaper = ({ children }) => {
  return <BlankFormWrapper>{children}</BlankFormWrapper>;
};

const BlankFormWrapper = styled.div`
  width: 210mm;
  height: 297mm;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default BondPaper;
