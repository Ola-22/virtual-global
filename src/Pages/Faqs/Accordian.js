import { useState } from "react";
import * as F from "../../Components/Answer&Questions/style";

function Accordian({ data, rtlLang }) {
  const [show, setShow] = useState(-1);

  function handleToggle(index) {
    if (index === show) {
      setShow(-1);
      return;
    }

    setShow(index);
  }

  return (
    <>
      <div className="box">
        {data?.map((item, index) => (
          <div key={index} onClick={() => handleToggle(index)}>
            <F.AccordianContainer
              className={show === index ? "activeShow accordian" : "accordian"}
            >
              <div className="accordion_faq">
                <h3>{item.question}</h3>
              </div>
              <div>
                <img
                  src="./images/Accordion.png"
                  alt="Accordion"
                  style={{
                    transform: rtlLang === 1 ? "rotate(180deg)" : "",
                  }}
                  width={19}
                  height={20}
                />
              </div>
            </F.AccordianContainer>

            <div>
              <F.AccordianAnswer
                className={
                  show === index
                    ? "active accordian-answer"
                    : "inActive accordian-answer"
                }
                dangerouslySetInnerHTML={{
                  __html: item.answer,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordian;
