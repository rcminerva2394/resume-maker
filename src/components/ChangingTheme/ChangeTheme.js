import React, { useContext } from "react";

import styled from "styled-components";
import { ThemeColor } from "../Main";

const ChangeTheme = () => {
  const { setHexTheme } = useContext(ThemeColor);

  const Themes = {
    gray: "#645D5D",
    green: "#297062",
    blue: "#240090",
    pinkRed: "#c3073f",
    orange: "#f13c20",
    purple: "#634884",
    brown: "#9b4c38",
    violet: "#4f2e66",
    black: "#000000",
  };

  return (
    <ButtonThemesWrapper>
      <ButtonTheme hex={Themes.gray} onClick={() => setHexTheme(Themes.gray)} />
      <ButtonTheme hex={Themes.green} onClick={() => setHexTheme(Themes.green)}/>
      <ButtonTheme hex={Themes.blue} onClick={() => setHexTheme(Themes.blue)} />
      <ButtonTheme hex={Themes.pinkRed} onClick={() => setHexTheme(Themes.pinkRed)}/>
      <ButtonTheme hex={Themes.orange} onClick={() => setHexTheme(Themes.orange)}/>
      <ButtonTheme hex={Themes.purple} onClick={() => setHexTheme(Themes.purple)}/>
      <ButtonTheme hex={Themes.brown} onClick={() => setHexTheme(Themes.brown)}/>
      <ButtonTheme hex={Themes.violet} onClick={() => setHexTheme(Themes.violet)}/>
      <ButtonTheme hex={Themes.black} onClick={() => setHexTheme(Themes.black)}/>
    </ButtonThemesWrapper>
  );
};

const ButtonTheme = styled.button`
  background-color: ${(props) => props.hex};
  padding: 8rem 16rem;
`;

const ButtonThemesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
export default ChangeTheme;
