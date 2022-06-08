import React from "react";
import styled, { css } from "styled-components";

const Button = ({ text, onClick, children }) => {
  return (
    <ButtonWrapper onClick={onClick} text={text}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  padding: 8rem 16rem;
  font-weight: bold;
  border-radius: 4rem;
  background-color: white;

  ${(props) =>
    props.text === "EditPrev" &&
    css`
      color: ${({ theme }) => theme.colors.green};
      border: solid 1px ${({ theme }) => theme.colors.green};

      :hover,
      :active {
        background-color: ${({ theme }) => theme.colors.green};
        color: white;
      }
    `}

  ${(props) =>
    props.text === "Download" &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      border: solid 1px ${({ theme }) => theme.colors.blue};

      :hover,
      :active {
        background-color: ${({ theme }) => theme.colors.blue};
        color: white;
      }
    `}
`;

export default Button;
