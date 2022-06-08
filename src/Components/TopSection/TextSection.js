import React from "react";
import styled from "styled-components";
import Typed from "react-typed";

const TextSection = () => {
  return (
    <TopContainer>
      <Logo>Hello!</Logo>
      <Logo>This is Tamilselvan Velayudham</Logo>
      <Typed
        className="typewriter"
        strings={[
          "I'm Full Stack Developer",
          "I'm SEO Developer",
          "I'm Engineer"
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
      />
      <Description>Let's Create 3D World using React JS</Description>
    </TopContainer>
  );
};

export default TextSection;

const TopContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
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
