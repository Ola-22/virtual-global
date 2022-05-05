import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  position: absolute;
  max-width: 177px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 269px;
  height: 100%;
  justify-content: space-around;
  color: #fff;
  background: #fff;
  z-index: 999;
  color: #000000;

  & li {
    position: relative;
    text-align: center;
    width: 100%;
    max-height: 53px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & a {
      font-size: 14px;
      color: #000000;
    }
    &:not(:last-of-type) {
      &::after {
        content: "";
        width: 100%;
        height: 0.5px;
        background-color: #e8e8e8;
        color: #e8e8e8;
        position: absolute;
        left: 0;
        top: 100%;
      }
    }
    &:hover {
      background: #5cabff;
    }
  }
`;
function Dropdown() {
  return (
    <>
      <Ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </Ul>
    </>
  );
}

export default Dropdown;
