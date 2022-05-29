import { useState } from "react";
import * as F from "../../Components/Answer&Questions/style";

function Accordian({ lengthFaqs, language }) {
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
        {lengthFaqs?.map((item, index) => (
          <div key={index} onClick={() => handleToggle(index)}>
            <F.AccordianContainer className="accordian">
              <div className="accordion_faq">
                <h3 className={show === index ? "active" : ""}>
                  {item.question}
                </h3>
              </div>
              <div>
                <img src="/images/Accordion.png" alt="Accordion" />
              </div>
            </F.AccordianContainer>

            <div>
              <F.AccordianAnswer
                className={show === index ? "active" : "inActive"}
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
