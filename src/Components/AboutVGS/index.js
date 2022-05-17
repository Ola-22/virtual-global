import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function AboutVGS({ homeData }) {
  const navigate = useNavigate();

  return (
    <S.AboutContainer>
      <div>
        <h1>{homeData?.items?.who_we_are?.title}</h1>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: homeData?.items?.who_we_are?.text,
          }}
        />

        <Button title="Read More" onClick={() => navigate("/who-we-are")} />
      </div>
      <div>
        <img
          src={homeData?.items?.who_we_are?.image}
          alt="read the about information"
        />
      </div>
    </S.AboutContainer>
  );
}
