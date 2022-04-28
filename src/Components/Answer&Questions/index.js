import * as S from "./style";
import Accordion from "./Accordion";

function AnswerQuestions() {
  return (
    <S.AnswerContainer>
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <h1>Answer & Questions</h1>
        <div style={{ cursor: "pointer" }}>
          <Accordion />
        </div>
      </div>
      <div>
        <h1>Let's Talk</h1>
        <p>We see your idea's and suggestions.</p>
        <form>
          <input type="text" placeholder="Name" />
          <div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <label htmlFor="tell-us">Tell Us About Anything *</label>
          <textarea id="tell-us" rows="4" cols="50" />
          <button type="submit">Send</button>
        </form>
      </div>
    </S.AnswerContainer>
  );
}

export default AnswerQuestions;
