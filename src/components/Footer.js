import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  font-size: 12rem;
  color: #817e7e;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>{`© ${new Date().getFullYear()} RC Bahan`}</p>
    </FooterWrapper>
  );
};

export default Footer;
