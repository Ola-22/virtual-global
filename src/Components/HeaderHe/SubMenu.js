import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Div = styled.div`
  background: #fff;
  max-width: 177px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100%;
  left: 20%;
  z-index: 221;
  color: #000000;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <NavLink to={item.link} onClick={item.sub_menu && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.sub_menu && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>
      <Div>
        {subnav &&
          item.sub_menu.map((item, index) => {
            return (
              // <DropdownLink to={item.link} key={index}>
              //   {item.icon}
              //   <SidebarLabel>{item.title}</SidebarLabel>
              // </DropdownLink>

              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
      </Div>
    </div>
  );
};

export default SubMenu;
