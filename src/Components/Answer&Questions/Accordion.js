import { useState } from "react";
import * as S from "./style";

const data = [
  {
    questions: "Question Title",
    answer:
      "In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outside the box, looking for creative solutions to try to change this reality. The World is made up of many nations and entities that differ in interests and goals. Therefore, it is difficult to build a unified strategy for a better future for human life on Earth! To overcome this reality, this ambitious – long term- proposal ",
  },
  {
    questions: "Question Title",
    answer:
      "In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outside the box, looking for creative solutions to try to change this reality. The World is made up of many nations and entities that differ in interests and goals. Therefore, it is difficult to build a unified strategy for a better future for human life on Earth! To overcome this reality, this ambitious – long term- proposal ",
  },
  {
    questions: "Question Title",
    answer:
      "In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outside the box, looking for creative solutions to try to change this reality. The World is made up of many nations and entities that differ in interests and goals. Therefore, it is difficult to build a unified strategy for a better future for human life on Earth! To overcome this reality, this ambitious – long term- proposal ",
  },
  {
    questions: "Question Title",
    answer:
      "In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outside the box, looking for creative solutions to try to change this reality. The World is made up of many nations and entities that differ in interests and goals. Therefore, it is difficult to build a unified strategy for a better future for human life on Earth! To overcome this reality, this ambitious – long term- proposal ",
  },
];

function Accordion() {
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
      {data.map((item, index) => (
        <div key={index} onClick={() => handleToggle(index)}>
          <S.AccordianContainer>
            <div className="accordion_faq">
              <h3 className={show === index ? "active" : ""}>
                {item.questions}
              </h3>
            </div>
            <div>
              <img src="/images/Accordion.png" alt="Accordion" />
            </div>
          </S.AccordianContainer>

          <div>
            <S.AccordianAnswer
              className={show === index ? "active" : "inActive"}
            >
              {item.answer}
            </S.AccordianAnswer>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
