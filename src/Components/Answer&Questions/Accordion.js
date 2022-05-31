import { useState } from "react";
import * as S from "./style";

function Accordion({ homeData }) {
  const [show, setShow] = useState(-1);

  function handleToggle(index) {
    if (index === show) {
      setShow(-1);
      return;
    }

    setShow(index);
  }

  return (
    <div>
      {homeData?.items?.faqs?.map((item, index) => (
        <div key={index} onClick={() => handleToggle(index)}>
          <S.AccordianContainer>
            <div className="accordion_faq">
              <h3 className={show === index ? "active" : ""}>
                {item.question}
              </h3>

              <div>
                <img src="/images/Accordion.png" alt="Accordion" />
              </div>
            </div>

            <div>
              <S.AccordianAnswer
                className={show === index ? "active" : "inActive"}
                dangerouslySetInnerHTML={{
                  __html: item.answer,
                }}
              />
            </div>
          </S.AccordianContainer>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
