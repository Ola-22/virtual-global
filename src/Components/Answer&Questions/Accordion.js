import { useState } from "react";
import * as S from "./style";

function Accordion({ homeData, language }) {
  const [show, setShow] = useState(-1);

  function handleToggle(index) {
    if (index === show) {
      setShow(-1);
      return;
    }

    setShow(index);
  }

  return (
    <div className="d">
      {homeData?.items?.faqs?.slice(0, 4)?.map((item, index) => (
        <div key={index} onClick={() => handleToggle(index)}>
          <S.AccordianContainer>
            <div
              className={
                show === index ? "accordion_faq activeShow" : "accordion_faq"
              }
            >
              <h3>{item.question}</h3>

              <div>
                <img
                  src="./images/Accordion.png"
                  alt="Accordion"
                  style={{
                    transform: language === "ar" ? "rotate(180deg)" : "",
                  }}
                />
              </div>
            </div>

            <S.AccordianAnswer>
              <p
                className={show === index ? "active" : "inActive"}
                dangerouslySetInnerHTML={{
                  __html: item.answer,
                }}
              />
            </S.AccordianAnswer>
          </S.AccordianContainer>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
