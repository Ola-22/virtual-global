import MenuItems from "./MenuItems";
import * as S from "./style";
import { useEffect, useState } from "react";
import authService from "../../Pages/Register/Auth";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ settingsData, open, setOpen }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <S.Nav>
      <S.Ul className="menus" open={open}>
        <>
          {settingsData?.items?.header?.map((menu, index) => {
            const depthLevel = 0;
            return (
              <div key={index.toString()}>
                <MenuItems
                  setOpen={setOpen}
                  items={menu}
                  depthLevel={depthLevel}
                />
              </div>
            );
          })}
          {settingsData?.items?.menus_header &&
            settingsData?.items?.menus_header.map((menu, index) => (
              <div key={index.toString()}>
                <MenuItems setOpen={setOpen} items={menu} />
              </div>
            ))}
          <li
            className="menu-items forum"
            style={{ display: !currentUser + "none" }}
          >
            {currentUser && (
              <Link to="/discussion">
                <img
                  src="./images/forum.png"
                  alt="form button"
                  width="15"
                  height="15"
                />
                {settingsData?.items?.translation?.forum_btn}
              </Link>
            )}
          </li>
          <li className="menu-items logout">
            {currentUser ? (
              <Link
                to="/"
                onClick={() => {
                  logOut();
                  navigate("/login");
                  setOpen(false);
                }}
              >
                {settingsData?.items?.translation?.log_out}
              </Link>
            ) : (
              <Link to="/register">Register</Link>
            )}
          </li>
        </>
      </S.Ul>
    </S.Nav>
  );
};

export default Navbar;
