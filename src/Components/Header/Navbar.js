import MenuItems from "./MenuItems";
import * as S from "./style";

const Navbar = ({ settingsData, open }) => {
  return (
    <S.Nav>
      <S.Ul className="menus" open={open}>
        {settingsData?.items?.header?.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </S.Ul>
    </S.Nav>
  );
};

export default Navbar;
