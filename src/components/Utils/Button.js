import React from "react";

import styled from "styled-components";

const Button = ({ type, primary, secondary, onClick, children, height, padding }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type || "button"}
      primary={primary}
      secondary={secondary}
      height={height}
      padding={padding}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  height: ${(props) => props.height ? props.height : `inherit`};
  padding: ${(props) => props.padding ? props.padding : `8rem 16rem`};
  font-weight: 600;
  border-radius: 4rem;
  letter-spacing: 1rem;
  color: ${(props) =>
    props.primary
      ? "white"
      : props.secondary
      ? ({ theme }) => theme.colors.darkGreen
      : "white"};
  background-color: ${(props) =>
    props.primary
      ? ({ theme }) => theme.colors.green
      : props.secondary
      ? "white"
      : ({ theme }) => theme.colors.darkBlue};
  border: 2rem solid
    ${(props) =>
      props.primary
        ? ({ theme }) => theme.colors.darkGreen
        : props.secondary
        ? ({ theme }) => theme.colors.darkGreen
        : ({ theme }) => theme.colors.blue};
  :hover {
    background-color: ${(props) =>
      props.primary
        ? ({ theme }) => theme.colors.darkGreen
        : props.secondary
        ? "#d5e3cc"
        : ({ theme }) => theme.colors.blue};
  }
`;
export default Button;
