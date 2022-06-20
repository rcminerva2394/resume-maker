import React from "react";

import styled, { css } from "styled-components";

const Button = ({ type, text, onClick, children }) => {
  return (
    <ButtonWrapper onClick={onClick} text={text} type={type || "button"}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  padding: 10rem 20rem;
  font-weight: 600;
  border-radius: 4rem;
  letter-spacing: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.blue};
  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${(props) =>
    props.text === "EditPrev" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.green};

      :hover,
      :active {
        background-color: ${({ theme }) => theme.colors.darkGreen};
      }
    `}
`;

export default Button;
