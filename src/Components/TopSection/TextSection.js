import React from "react";
import styled from "styled-components";

const TextSection = () => {
  return (
    <TopContainer>
      <Logo>TSDEVELOPER</Logo>
      <Description>Let's Create 3D World using React JS</Description>
    </TopContainer>
  );
};

export default TextSection;

const TopContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 35px;
`;

const Description = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 20px;
  margin-top: 1em;
`;
