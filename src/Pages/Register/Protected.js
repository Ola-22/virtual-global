import { useNavigate } from "react-router-dom";

function Protected(props) {
  const navigate = useNavigate();
  const Comp = props.comp;
  var auth = JSON.parse(localStorage.getItem("auth"));

  console.warn(auth);
  return <div>{auth ? <Comp /> : navigate("/login")}</div>;
}

export default Protected;
