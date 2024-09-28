import TopBar from "./topbar";
import NavList from "./navList";
import React from "react";

const NavBar = ({ handleClick, isClicked }) => {
  return (
    <>
      <TopBar handleClick={handleClick} isClicked={isClicked} />
      <NavList handleClick={handleClick} isClicked={isClicked} />
    </>
  );
};

export default NavBar;
