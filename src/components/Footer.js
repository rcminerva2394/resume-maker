import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterWrapper = styled.footer`
  position: fixed;
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
        <FaGithub fontSize="24rem" />
      </a>
    </FooterWrapper>
  );
};

export default Footer;
