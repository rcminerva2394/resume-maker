import React from "react";

import styled from "styled-components";

const Button = ({
  type,
  primary,
  secondary,
  tertiary,
  onClick,
  children,
  height,
  padding,
  fontSize,
  margin
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type || "button"}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      height={height}
      padding={padding}
      fontSize={fontSize}
      margin={margin}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  height: ${(props) => (props.height ? props.height : `inherit`)};
  padding: ${(props) => (props.padding ? props.padding : `8rem 16rem`)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  margin-left: ${(props) => props.margin ? props.margin : 0};
  margin-bottom: ${(props) => props.margin ? props.margin : "auto"};
  font-weight: 600;
  border-radius: 4rem;
  letter-spacing: 1rem;
  color: ${(props) =>
    props.primary
      ? "white"
      : props.secondary
      ? ({ theme }) => theme.colors.darkGreen
      : props.tertiary
      ? "white"
      : "red"};
  background-color: ${(props) =>
    props.primary
      ? ({ theme }) => theme.colors.green
      : props.secondary
      ? "white"
      : props.tertiary
      ? ({ theme }) => theme.colors.darkBlue
      : "transparent"};
  border: 2rem solid
    ${(props) =>
      props.primary
        ? ({ theme }) => theme.colors.darkGreen
        : props.secondary
        ? ({ theme }) => theme.colors.darkGreen
        : props.tertiary
        ? ({ theme }) => theme.colors.blue
        : "red"};
  :hover {
    background-color: ${(props) =>
      props.primary
        ? ({ theme }) => theme.colors.darkGreen
        : props.secondary
        ? "#d5e3cc"
        : props.tertiary
        ? ({ theme }) => theme.colors.blue
        : "#ff9999"};
  }
`;
export default Button;
