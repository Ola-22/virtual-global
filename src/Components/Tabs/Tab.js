export default function Tab(props, language, rtlLang) {
  if (props.isSelected) {
    return (
      <div
        className="tab"
        onClick={props.onClick}
        style={{
          direction: rtlLang === 1 ? "rtl" : "ltr",
        }}
      >
        {props.children}
      </div>
    );
  }
  return null;
}
