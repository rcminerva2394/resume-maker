import React from "react";

import styled from "styled-components";

const PersonalInfo = ({ personalInfo, onChangePersonalInfo }) => {
  return (
    <PersonalInfoWrapper>
      <Input
        type="text"
        placeholder="First name"
        name="firstname"
        value={personalInfo.firstname}
        onChange={(e) => onChangePersonalInfo(e)}
      ></Input>
      <Input
        type="text"
        placeholder="Last name"
        name="lastname"
        value={personalInfo.lastname}
        onChange={(e) => onChangePersonalInfo(e)}
      ></Input>
      <Input
        type="text"
        placeholder="Job Role"
        name="job"
        value={personalInfo.job}
        onChange={(e) => onChangePersonalInfo(e)}
      ></Input>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        value={personalInfo.email}
        onChange={(e) => onChangePersonalInfo(e)}
      ></Input>
      <Input
        type="text"
        placeholder="Contact Number"
        name="number"
        value={personalInfo.number}
        onChange={(e) => onChangePersonalInfo(e)}
      ></Input>
      <Input
        type="text"
        placeholder="Address"
        name="address"
        value={personalInfo.address}
        onChange={(e) => onChangePersonalInfo(e)}
      ></Input>
    </PersonalInfoWrapper>
  );
};

const PersonalInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 10rem;
`;

const Input = styled.input`
  margin-left: 5rem;
  height: 25rem;
  width: 100%;
  margin-bottom: 5rem;
`;

export default PersonalInfo;
