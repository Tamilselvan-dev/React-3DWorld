import React from "react";
import styled from "styled-components";
import logo from "../../../public/logo.svg";
const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <NavList>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Skils</li>
          <li>Contact</li>
          <a href="../.">Download</a>
        </ul>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

const Logo = styled.div`
  padding: 20px;

  img {
    width: 50%;
    height: 50%;
  }
`;

const NavList = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    padding: 20px;
    color: white;
    font-weight: 700;
    transition: all 500ms ease-in-out;
  }

  a {
    margin-left: 10px;
    font-size: 15px;
    border: 2px solid white;
    padding: 8px;
    border-radius: 20px;
  }

  a:hover {
    cursor: pointer;
    background-color: blue;
    color: #fff;
  }

  li:hover {
    border-bottom: 2px solid #fff;
  }
`;
