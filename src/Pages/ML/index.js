import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import * as S from "./style";

function ML() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Header />
      <S.MLContainer>
        <div className="box">
          <h1>The missing link (ml)</h1>
          <p>
            Before getting into this topic, here is an example of theory and
            application: The polio vaccination started in the "theoretical
            phase" of drug development and ensuring its efficacy through
            chemical equations on paper. Then it moved to the "application
            phase" where the drug was practically tested, piloted, manufactured,
            then approved and distributed through an advanced health system.
            However, what prompted parents to rush to health centers to
            vaccinate their children on time? The reason for this motive or
            incentive is surely that parents are fully convinced that if their
            children are not vaccinated, risk of paralysis is certain. Parents
            have been persuaded, of course, thanks to an effective program of
            information and advice directed at people about the need for
            vaccination for their children. Although it was good in theory,
            vaccination would certainly fail, in the application stage, if the
            program was not effective and convincing. Therefore, the effective
            information and advice program, targeted to people, is indispensable
            and represents an incentive or a link between theory and
            application.
          </p>
          <p>
            Back to our topic, the international bodies represented in the
            United Nations, and before that the League of Nations,
            "theoretically" adopted many standards, treaties and understandings
            on international relations based on the principles of international
            cooperation and peaceful solution to problems. In this proposal,
            these standards and treaties will be referred to as Global
            Theoretical Standards (GTS). They are based on respect for human
            rights, including the right to choose their government by democratic
            andfair means, ensuring a world free from war and violence, and
            allowing human beings to enjoy safety, freedom, and social and
            economic security. Some GTS may be applied in whole or in part in
            some countries, but certainly major countries apply some of the GTS,
            especially with regard to democracy and human rights only within
            their borders while their relations with other countries are
            governed by the laws of interests and domination. This is opposed to
            the previous GTS!
          </p>

          <p>
            So why didn't the GTS move to the comprehensive implementation stage
            knowing that the implementation would lead to a world free of war
            and violence where people enjoy not only safety and freedom but also
            social and economic security? The answer, in contrast to the
            previous illustrative example above (polio vaccination), is clearly
            the absence of motivation. This incentive is the convincement of the
            decision makers in international politics (group 4) of the need for
            a comprehensive application of the GTS. This is the missing link
            (ML), Figure 3, between theory and application. So, what is the
            reason for the loss of this link? Is an effective advisory program-
            directed to (group 4)- needed for the comprehensive implementation
            of the GTS? Of course, it is not so simple, as in the example of
            vaccination above, but it has the same principle. What this means is
            not a traditional mentoring program but a Universally agreed,
            multicultural, Persuasive, and Advisory program (MPAP). It should be
            prepared by a group of selected thinkers from different cultures of
            the world and specialists who are not only from the fields of
            political and social sciences but also from applied sciences such as
            engineering, artificial intelligence, information technology (IT)
            and others. VGS will include MPAP as part of the GP-WTM to achieve
            this goal.
          </p>

          <S.BoxContent>
            <span>
              <div>GTS</div>
              <div>missing link: (Incentive)</div>
              <div>comprehensive application</div>
            </span>
            <div className="arrow">
              <div className="arrow"></div>
            </div>
            <div className="box-bt">
              <p>mpap</p>
            </div>
          </S.BoxContent>
        </div>
      </S.MLContainer>
    </div>
  );
}

export default ML;
