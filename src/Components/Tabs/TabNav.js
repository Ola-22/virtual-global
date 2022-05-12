import * as S from "./style";

export default function TabNav(props) {
  return (
    <S.MainTab>
      <S.TabsContainer>
        {props.tabs.map((tab) => {
          const activeSelect = tab === props.selected ? "activeSelect" : "";
          return (
            <li className="nav-item" key={tab}>
              <div
                className={"tab-link " + activeSelect}
                onClick={() => props.SelectTab(tab)}
              >
                {tab}
              </div>
            </li>
          );
        })}
      </S.TabsContainer>
      {props.children}
    </S.MainTab>
  );
}