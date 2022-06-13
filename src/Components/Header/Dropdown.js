import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel, setOpen }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <div onClick={() => setOpen(false)} key={index}>
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        </div>
      ))}
    </ul>
  );
};

export default Dropdown;
