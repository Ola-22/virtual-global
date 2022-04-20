import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
    margin-inline-end: 19.5px;
    padding-inline-start: 19.5px;
    &::after {
      content: "";
      width: 1px;
      height: 71px;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      position: absolute;
      top: 0;
      margin-left: -19px;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 22;
  }
`;

function LeftNav({ open }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Ul open={open} onMouseLeave={() => setDropdown(!dropdown)}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/who-we-are">who we are</NavLink>
      <NavLink to="/q&a">q&a</NavLink>

      <NavLink to="/vgs" onMouseEnter={() => setDropdown(!dropdown)}>
        vgs
      </NavLink>
      {dropdown && (
        <S.hoverVGS>
          <Link to="/abstract">Abstract</Link>
          <Link to="/">Implementation</Link>
          <Link to="/">Project</Link>
          <Link to="/">SMW</Link>
          <Link to="/">List</Link>
        </S.hoverVGS>
      )}

      <NavLink to="/bmi">bmi</NavLink>
      <NavLink to="/ml">ml</NavLink>
      <NavLink to="/wc">wc</NavLink>
      <NavLink to="/vission">vission</NavLink>
    </Ul>
  );
}

export default LeftNav;
