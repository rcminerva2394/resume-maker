import React from "react";

import styled from "styled-components";

const BondPaper = ({ children, isEditForm }) => {
  return <BlankFormWrapper isEditForm={isEditForm}>{children}</BlankFormWrapper>;
};

const BlankFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 210mm;
  height: ${(props) => props.isEditForm? "100%" : "297mm" };
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20rem 20rem 20rem 20rem;
`;

export default BondPaper;
