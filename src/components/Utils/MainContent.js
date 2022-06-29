import React from "react";

import styled from "styled-components";

const MainContent = ({ children }) => {
  return <MainContWrapper>{children}</MainContWrapper>;
};

const MainContWrapper = styled.div`
  width: 65%;
  padding: 0 20rem 20rem 20rem;
`;
export default MainContent;
