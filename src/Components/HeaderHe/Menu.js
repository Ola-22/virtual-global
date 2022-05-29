import React, { useState } from "react";
import styled from "styled-components";
import LeftNav from "./LeftNav";
import Sidebar from "./Sidebar";

const StyledMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: ${({ open }) => (open ? "fixed" : "")};
  top: 5%;
  right: 10%;
  z-index: 20;
  display: none;
  @media (max-width: 980px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 5555;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = ({ settingsData }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledMenu>
      <LeftNav settingsData={settingsData} open={open} />
      {/* <Sidebar settingsData={settingsData} open={open} /> */}
    </>
  );
};

export default Menu;
