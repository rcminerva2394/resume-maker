import React from 'react';
import styled from 'styled-components';

import { Icon } from './Utils/Icon';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>{`© ${new Date().getFullYear()} RC Bahan`}</p>
      <FooterLink
        href="https://github.com/rcminerva2394"
        id="profile-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" />
      </FooterLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  bottom: 0;
  width: 100%;
  gap: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FooterLink = styled.a`
  font-size: 16rem;
`;
export default Footer;
