import { Link } from "react-router-dom";
import * as S from "./style";

function VirtualState() {
  return (
    <S.VirtualState>
      <div>
        <img
          //   width="343"
          src="/images/Canvas.png"
          alt="join the virtual global"
        />
      </div>
      <div>
        <h6>
          join the Virtual Global State (VGS) and get its virtual citizenship!
          It is free and does not conflict with your real nationality.
        </h6>
        <Link to="/register">Register Now</Link>
      </div>
    </S.VirtualState>
  );
}

export default VirtualState;
