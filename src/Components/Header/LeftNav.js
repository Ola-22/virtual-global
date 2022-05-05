import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";

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
      @media (max-width: 970px) {
        display: none;
      }
    }

    &.active {
      background: rgba(0, 0, 0, 20%);

      @media (max-width: 768px) {
        background: inherit;
      }
    }
  }
  @media (max-width: 768px) {
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

    z-index: 22;
  }
`;

function LeftNav({ open }) {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  return (
    <Ul open={open} onMouseLeave={() => setDropdown(!dropdown)}>
      <NavLink to="/" className="dropdown-link">
        Home
      </NavLink>
      <NavLink to="/who-we-are" className="dropdown-link">
        who we are
      </NavLink>
      <NavLink to="/q&a" className="dropdown-link">
        q&a
      </NavLink>

      <div>
        <NavLink
          to="/vgs"
          onMouseEnter={onMouseEnter}
          className="dropdown-link"
        >
          vgs
        </NavLink>
        {dropdown && <Dropdown />}
      </div>
      <NavLink to="/bmi" className="dropdown-link">
        bmi
      </NavLink>
      <NavLink to="/ml" className="dropdown-link">
        ml
      </NavLink>
      <NavLink to="/wc" className="dropdown-link">
        wc
      </NavLink>
      <NavLink to="/vission" className="dropdown-link">
        vission
      </NavLink>
      <NavLink to="/vission" className="dropdown-link">
        goals
      </NavLink>
    </Ul>
  );
}

export default LeftNav;
