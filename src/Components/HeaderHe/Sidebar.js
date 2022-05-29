import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  /* background: #15171c; */
  /* width: 250px; */
  /* height: 100vh; */
  display: flex;
  /* justify-content: center; */
  /* position: fixed;
  top: 0; */
  /* left: ${({ sidebar }) => (sidebar ? "0" : "-100%")}; */
  transition: 350ms;
  /* z-index: 10; */
`;

const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  .dropdown-link {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
    padding-inline-end: 19.5px;
    padding-inline-start: 19.5px;
    height: 71px;
    &::after {
      content: "";
      width: 1px;
      height: 71px;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      position: absolute;
      top: 0;
      margin-left: -20px;
      @media (max-width: 1100px) {
        display: none;
      }
    }

    &.active {
      background: rgba(0, 0, 0, 20%);

      @media (max-width: 980px) {
        background: inherit;
      }
    }
    @media (min-width: 979px) and (max-width: 1100px) {
      font-size: 12px;
      padding-inline-end: 10px;
      padding-inline-start: 10px;
    }
  }
  @media (max-width: 980px) {
    flex-flow: column nowrap;
    background-color: #2395db;
    position: fixed;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: ${({ open }) =>
      open ? "transform 0.3s ease-in-out" : "translateX(100%)"};

    z-index: 222;
  }
`;
const Sidebar = ({ settingsData, open }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Ul open={open}>
          <SidebarNav>
            <SidebarWrap>
              {settingsData?.items?.header.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </Ul>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
