// import "./styles.css";
import Typing from "react-typing-animation";

export const TypeWriterEffect = ({ homeData }) => {
  return (
    <Typing loop>
      <span>Ahmed.</span>
      <span>Ahmed 2</span>
      <Typing.Reset count={0} delay={500} />
    </Typing>
  );
};
