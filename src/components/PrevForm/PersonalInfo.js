import React from "react";

import { Icon } from "../Utils/Icon";
import styled from "styled-components";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <PersonalInfoWrapper>
      <Wrapper>
        <FullName>{personalInfo.firstname}</FullName> 
        <FullName>{personalInfo.lastname}</FullName>
        <Job>{personalInfo.job}</Job>
      </Wrapper>
      <Wrapper>
        <Contact>
          <Icon name={"email"} />
          <p>{personalInfo.email}</p>
        </Contact>
        <Contact>
          <Icon name={"phone"} />
          <p>{personalInfo.number}</p>
        </Contact>
        <Contact>
          <Icon name={"address"} />
          <p>{personalInfo.address}</p>
        </Contact>
      </Wrapper>
    </PersonalInfoWrapper>
  );
};

const FullName = styled.p`
  font-size: 45rem;
  font-family: "Bebas Neue";
  font-weight: bold;
  line-height: 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Job = styled.p`
font-size: 16rem;
font-weight: light;
line-height: 0;
color: ${({theme}) => theme.colors.darkGray}`


const Contact = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 10rem;
font-size: 15rem;
`

const PersonalInfoWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border-bottom: ${(props) =>
    props.isLast
      ? "none"
      : "2px solid #F2F2F2" };
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
`
export default PersonalInfo;
