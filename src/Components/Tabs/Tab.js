export default function Tab(props) {
  if (props.isSelected) {
    return (
      <div className="tab" onClick={props.onClick}>
        {props.children}
      </div>
    );
  }
  return null;
}
