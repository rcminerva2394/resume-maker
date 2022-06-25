import React from "react";
import styled from "styled-components";
import { Icon } from "./Utils/Icon";

const FooterWrapper = styled.footer`
  bottom: 0;
  width: 100%;
  gap: 10rem;
  display: flex;
  justify-content: center;  
  align-items: center;
  color: ${({theme}) => theme.colors.darkGray};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>{`© ${new Date().getFullYear()} RC Bahan`}</p>
      <a
        href="https://github.com/rcminerva2394"
        id="profile-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" fontSize={"18rem"} />
      </a>
    </FooterWrapper>
  );
};

export default Footer;
