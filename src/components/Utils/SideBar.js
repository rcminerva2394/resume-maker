import React from "react";

import styled from "styled-components";

const SideBar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 35%;
  border-right: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: grid;
`;

export default SideBar;
