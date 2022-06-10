export default function Tab(props, language) {
  if (props.isSelected) {
    return (
      <div
        className="tab"
        onClick={props.onClick}
        style={{
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {props.children}
      </div>
    );
  }
  return null;
}
