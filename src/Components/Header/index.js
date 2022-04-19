import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <S.HeaderContainer>
      <div onMouseLeave={() => setDropdown(!dropdown)}>
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
      </div>

      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? (
          <img src="/images/bars.svg" alt="" />
        ) : (
          <img src="/images/times.svg" alt="" />
        )}
      </div>

      <div>
        <Link to="/">
          <img
            src="/images/forum.png"
            alt="form button"
            width="15"
            height="15"
          />
          Forum
        </Link>
        <Link to="/register">Register</Link>
        <input type="text" placeholder="Enter" />
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
