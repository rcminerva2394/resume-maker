import React from "react";
import styled from "styled-components";
import Icon from "./Utils/Icon";

const FooterWrapper = styled.footer`
  bottom: 0;
  width: 100%;
  font-size: 12rem;
  color: #868ba2;
  background-color: transparent;
  gap: 10rem;
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
      <Icon name="github"/>
      </a>
    </FooterWrapper>
  );
};

export default Footer;
