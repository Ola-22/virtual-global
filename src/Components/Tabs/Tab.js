export default function Tab(props) {
  if (props.isSelected) {
    return (
      <a className="tab" onClick={props.onClick}>
        {props.children}
      </a>
    );
  }
  return null;
}
