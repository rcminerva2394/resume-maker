import React, { useContext } from 'react';
import styled from 'styled-components';

import { Icon } from '../Utils/Icon';
import { ThemeColor } from '../Main';

const PersonalInfo = ({ personalInfo }) => {
  const { hexTheme } = useContext(ThemeColor);
  return (
    <PersonalInfoWrapper>
      <Wrapper>
        <FullName color={hexTheme}>{personalInfo.firstname}</FullName>
        <FullName color={hexTheme}>{personalInfo.lastname}</FullName>
        <Job>{personalInfo.job}</Job>
      </Wrapper>
      <Wrapper>
        <Contact>
          <Icon name={'email'} />
          <p>{personalInfo.email}</p>
        </Contact>
        <Contact>
          <Icon name={'phone'} />
          <p>{personalInfo.number}</p>
        </Contact>
        <Contact>
          <Icon name={'address'} />
          <p>{personalInfo.address}</p>
        </Contact>
      </Wrapper>
    </PersonalInfoWrapper>
  );
};

const FullName = styled.p`
  font-size: 45rem;
  font-family: 'Bebas Neue';
  font-weight: bold;
  line-height: 0;
  color: ${(props) => props.color};
`;

const Job = styled.p`
  font-size: 16rem;
  font-weight: light;
  line-height: 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10rem;
  font-size: 14rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: -1rem;
`;

const PersonalInfoWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid #f2f2f2;
`;

const Wrapper = styled.div`
  display: block;
  width: 50%;
  margin-bottom: 10rem;
`;

export default PersonalInfo;
