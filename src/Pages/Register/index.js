import * as S from "./style";
import React, { useState } from "react";
import { Modal } from "../../Components/Modal";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

export default function Register() {
  const [gender, setGender] = useState();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showVirtualConstitution, setShowVirtualConstitution] = useState(false);

  const closeModalTerms = () => setShowTerms(false);

  const closeModalPrivacy = () => setShowPrivacyPolicy(false);

  const closeModalVirtual = () => setShowVirtualConstitution(false);

  return (
    <S.RegisterContainer>
      <S.RegisterBox>
        <Link to="/">
          <h2>virtual citizenship registration</h2>
        </Link>
        <S.RegisterContent>
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter Here" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Here" />
          </div>
        </S.RegisterContent>
        <S.wrapperEmail>
          <label>Email</label>
          <input type="email" placeholder="Enter Here" />
        </S.wrapperEmail>

        <S.RegisterContent>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter Here" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter Here" />
          </div>
        </S.RegisterContent>

        <S.RegisterContent>
          <div>
            <label>Date of Birth</label>
            <input type="date" placeholder="Example NOV 11 1990" />
          </div>
          <div>
            <label>Country of Birth</label>
            <select placeholder="Select from here" />
          </div>
        </S.RegisterContent>

        <S.RegisterGender>
          <label>Gender</label>
          <div>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Male</span>
            </div>
            <div className="gender">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Female</span>
            </div>
          </div>
        </S.RegisterGender>

        <S.RegisterContent>
          <div>
            <label>Academic Level</label>
            <select name="degree">
              <option value="Select from here">Select from here</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master's">Master's</option>
              <option value="Specialist">Specialist</option>
            </select>
          </div>
          <div>
            <label>Major of Interest, Specialization </label>

            <select name="major">
              <option value="Select from here">Select from here</option>
              <option value="IT">IT</option>
              <option value="Medical">Medical</option>
              <option value="IT & C">IT & C</option>
            </select>
          </div>
        </S.RegisterContent>
        <S.RegisterGender>
          <div>
            <input type="checkbox" />
            <span>
              Accept on the peamable of the
              <S.AnchorTag onClick={() => setShowVirtualConstitution(true)}>
                Virtual Constitution Terms
              </S.AnchorTag>
            </span>
          </div>
        </S.RegisterGender>

        <S.RegisterGender>
          <div>
            <input type="checkbox" />
            <span>
              Accept on
              <S.AnchorTag onClick={() => setShowTerms(true)}>
                Terms & Conditions
              </S.AnchorTag>
              &nbsp; And
              <S.AnchorTag onClick={() => setShowPrivacyPolicy(true)}>
                Privacy Policy
              </S.AnchorTag>
            </span>
          </div>
        </S.RegisterGender>
        <Button title="Register Now" />
        <S.loginAccount>
          You already have a citizenship ? <Link to="/login">Enter</Link>
        </S.loginAccount>
      </S.RegisterBox>

      {showTerms ? (
        <div onClick={closeModalTerms} className="back-drop"></div>
      ) : null}

      <Modal
        content={
          <>
            <div className="modal-header">
              <p>Terms & Conditions</p>
              <span onClick={closeModalTerms} className="close-modal-btn">
                <img src="/images/close.png" alt="close the Modal" />
              </span>
            </div>

            <div className="modal-body">
              <p>
                " In light of the current situation of wars and human tragedies
                in the World and the absence of a promising horizon where real
                peace and constructive cooperation between people prevails, this
                proposal urges us to think outside the box, looking for creative
                solutions to try to change this reality. The World is made up of
                many nations and entities that differ in interests and goals.
                Therefore, it is difficult to build a unified strategy for a
                better future for human life on Earth! To overcome this reality,
                this ambitious – long term- proposal suggests the creation of a
                Virtual Global State (VGS) that liberates people from the
                complexities of their geopolitical, civilizational, ethnic,
                racial, religious and ideological differences, though respected,
                and helps address the world’s vital issues, with innovative
                ideas, freely and without restrictions. The goal is to
                Re-engineer Thoughts Toward a Better World. VGS will benefit
                from the tremendous development in Communications, Artificial
                Intelligence and Information Technologies. It is hoped to
                attract creative and constructive opinions and solutions from
                different citizens of the real states to problems in definite
                fields as a virtual simulation of reality. It is, indeed, the
                essential task of this proposal to revolutionize the way of
                thinking toward world’s critical issues. This will be based on
                two developed “intuitive” concepts: The Macroscopic Outlook (MO)
                and Missing Link (ML). Having a Virtual Constitution (VC), a
                flag, and a global anthem, every individual in the world has the
                right to belong to VGS and obtain its “virtual” citizenship,
                subject to approval of its constitution. The virtual “citizens”
                of the VGS are already parts of the real World in addition to
                being parts of the VGS. Hence, they will constitute a bridge
                between the two Worlds and will create a global public opinion
                for an acceptable and a stable level of peaceful and
                constructively cooperative real World. Free from the
                geopolitical, racial, ethnic and other determinants, VGS will
                form a positive pressure force on decision makers in the
                real-world to implement effective and rapid reforms that
                increase with increasing the number of members (virtual
                citizens) belonging to the VGS. It also represents a valuable
                guide for the real World to treat and solve actual problems and
                face real challenges. Meanwhile, a Global Interim Vision (GIV)
                of the VGS as a model for the future vision of the real-world is
                proposed to be developed by a VGS’ Wise Council (WC), elected by
                virtual “citizens” of the VGS. The formation of a World
                Transitional Mission (WTM) for the VGS whose task is to work
                towards achieving the desired GIV, and the democratic election
                of a Virtual Parliament (VP) are other two jobs of the WC. The
                VP forms a Virtual Government (VG) according to the VC. The VG,
                in its turn, forms a steering committee to direct and supervise
                the design of a Global Project to implement the WTM (GP-WTM).
                The GP-WTM is split into four components as follows: (1) A
                Universally agreed, trans-culture, Persuasive and Advisory
                Program (UPAP) which represents the ML that may shorten the way
                toward more peaceful culture and humanitarian cooperation as it
                addresses the root “mental” causes of conflicts. (2) A Forecast
                and Processing program (FP3P) that is based on the MO and
                represents innovative treatment of the “physical” causes of
                conflicts. (3) An Actual world’s States Simulator (ASS) that
                reflects the output results of GP-WTM on the real world. (4)
                Results’ Collection and Dissemination Unit (RCDU) where the
                output results of performance evaluations of UPAP and FP3P via
                ASS are collected in RCDU and disseminated to the citizens of
                the VGS and to the real world. Instead of the ASS, which
                represents a current model that simulates the real-world with
                all its states, including important and decisive factors, a
                Visionary Model of the Globe (VMG) as a future model of what the
                real world will look like, as people hope, will be developed in
                the final stages, drawing incremental steps to transform the
                current model into it. This will turn the GIV into a concrete
                global vision."
              </p>
            </div>
          </>
        }
        show={showTerms}
        close={closeModalTerms}
      />

      {showPrivacyPolicy ? (
        <div onClick={closeModalPrivacy} className="back-drop"></div>
      ) : null}

      <Modal
        content={
          <>
            <div className="modal-header">
              <p>Privacy Policy</p>
              <span onClick={closeModalPrivacy} className="close-modal-btn">
                <img src="/images/close.png" alt="close the Modal" />
              </span>
            </div>

            <div className="modal-body">
              <p>
                " In light of the current situation of wars and human tragedies
                in the World and the absence of a promising horizon where real
                peace and constructive cooperation between people prevails, this
                proposal urges us to think outside the box, looking for creative
                solutions to try to change this reality. The World is made up of
                many nations and entities that differ in interests and goals.
                Therefore, it is difficult to build a unified strategy for a
                better future for human life on Earth! To overcome this reality,
                this ambitious – long term- proposal suggests the creation of a
                Virtual Global State (VGS) that liberates people from the
                complexities of their geopolitical, civilizational, ethnic,
                racial, religious and ideological differences, though respected,
                and helps address the world’s vital issues, with innovative
                ideas, freely and without restrictions. The goal is to
                Re-engineer Thoughts Toward a Better World. VGS will benefit
                from the tremendous development in Communications, Artificial
                Intelligence and Information Technologies. It is hoped to
                attract creative and constructive opinions and solutions from
                different citizens of the real states to problems in definite
                fields as a virtual simulation of reality. It is, indeed, the
                essential task of this proposal to revolutionize the way of
                thinking toward world’s critical issues. This will be based on
                two developed “intuitive” concepts: The Macroscopic Outlook (MO)
                and Missing Link (ML). Having a Virtual Constitution (VC), a
                flag, and a global anthem, every individual in the world has the
                right to belong to VGS and obtain its “virtual” citizenship,
                subject to approval of its constitution. The virtual “citizens”
                of the VGS are already parts of the real World in addition to
                being parts of the VGS. Hence, they will constitute a bridge
                between the two Worlds and will create a global public opinion
                for an acceptable and a stable level of peaceful and
                constructively cooperative real World. Free from the
                geopolitical, racial, ethnic and other determinants, VGS will
                form a positive pressure force on decision makers in the
                real-world to implement effective and rapid reforms that
                increase with increasing the number of members (virtual
                citizens) belonging to the VGS. It also represents a valuable
                guide for the real World to treat and solve actual problems and
                face real challenges. Meanwhile, a Global Interim Vision (GIV)
                of the VGS as a model for the future vision of the real-world is
                proposed to be developed by a VGS’ Wise Council (WC), elected by
                virtual “citizens” of the VGS. The formation of a World
                Transitional Mission (WTM) for the VGS whose task is to work
                towards achieving the desired GIV, and the democratic election
                of a Virtual Parliament (VP) are other two jobs of the WC. The
                VP forms a Virtual Government (VG) according to the VC. The VG,
                in its turn, forms a steering committee to direct and supervise
                the design of a Global Project to implement the WTM (GP-WTM).
                The GP-WTM is split into four components as follows: (1) A
                Universally agreed, trans-culture, Persuasive and Advisory
                Program (UPAP) which represents the ML that may shorten the way
                toward more peaceful culture and humanitarian cooperation as it
                addresses the root “mental” causes of conflicts. (2) A Forecast
                and Processing program (FP3P) that is based on the MO and
                represents innovative treatment of the “physical” causes of
                conflicts. (3) An Actual world’s States Simulator (ASS) that
                reflects the output results of GP-WTM on the real world. (4)
                Results’ Collection and Dissemination Unit (RCDU) where the
                output results of performance evaluations of UPAP and FP3P via
                ASS are collected in RCDU and disseminated to the citizens of
                the VGS and to the real world. Instead of the ASS, which
                represents a current model that simulates the real-world with
                all its states, including important and decisive factors, a
                Visionary Model of the Globe (VMG) as a future model of what the
                real world will look like, as people hope, will be developed in
                the final stages, drawing incremental steps to transform the
                current model into it. This will turn the GIV into a concrete
                global vision."
              </p>
            </div>
          </>
        }
        show={showPrivacyPolicy}
        close={closeModalPrivacy}
      />

      {showVirtualConstitution ? (
        <div onClick={closeModalVirtual} className="back-drop"></div>
      ) : null}

      <Modal
        content={
          <>
            <div className="modal-header">
              <p>Constitution Terms</p>
              <span onClick={closeModalVirtual} className="close-modal-btn">
                <img src="/images/close.png" alt="close the Modal" />
              </span>
            </div>

            <div className="modal-body">
              <p>
                " In light of the current situation of wars and human tragedies
                in the World and the absence of a promising horizon where real
                peace and constructive cooperation between people prevails, this
                proposal urges us to think outside the box, looking for creative
                solutions to try to change this reality. The World is made up of
                many nations and entities that differ in interests and goals.
                Therefore, it is difficult to build a unified strategy for a
                better future for human life on Earth! To overcome this reality,
                this ambitious – long term- proposal suggests the creation of a
                Virtual Global State (VGS) that liberates people from the
                complexities of their geopolitical, civilizational, ethnic,
                racial, religious and ideological differences, though respected,
                and helps address the world’s vital issues, with innovative
                ideas, freely and without restrictions. The goal is to
                Re-engineer Thoughts Toward a Better World. VGS will benefit
                from the tremendous development in Communications, Artificial
                Intelligence and Information Technologies. It is hoped to
                attract creative and constructive opinions and solutions from
                different citizens of the real states to problems in definite
                fields as a virtual simulation of reality. It is, indeed, the
                essential task of this proposal to revolutionize the way of
                thinking toward world’s critical issues. This will be based on
                two developed “intuitive” concepts: The Macroscopic Outlook (MO)
                and Missing Link (ML). Having a Virtual Constitution (VC), a
                flag, and a global anthem, every individual in the world has the
                right to belong to VGS and obtain its “virtual” citizenship,
                subject to approval of its constitution. The virtual “citizens”
                of the VGS are already parts of the real World in addition to
                being parts of the VGS. Hence, they will constitute a bridge
                between the two Worlds and will create a global public opinion
                for an acceptable and a stable level of peaceful and
                constructively cooperative real World. Free from the
                geopolitical, racial, ethnic and other determinants, VGS will
                form a positive pressure force on decision makers in the
                real-world to implement effective and rapid reforms that
                increase with increasing the number of members (virtual
                citizens) belonging to the VGS. It also represents a valuable
                guide for the real World to treat and solve actual problems and
                face real challenges. Meanwhile, a Global Interim Vision (GIV)
                of the VGS as a model for the future vision of the real-world is
                proposed to be developed by a VGS’ Wise Council (WC), elected by
                virtual “citizens” of the VGS. The formation of a World
                Transitional Mission (WTM) for the VGS whose task is to work
                towards achieving the desired GIV, and the democratic election
                of a Virtual Parliament (VP) are other two jobs of the WC. The
                VP forms a Virtual Government (VG) according to the VC. The VG,
                in its turn, forms a steering committee to direct and supervise
                the design of a Global Project to implement the WTM (GP-WTM).
                The GP-WTM is split into four components as follows: (1) A
                Universally agreed, trans-culture, Persuasive and Advisory
                Program (UPAP) which represents the ML that may shorten the way
                toward more peaceful culture and humanitarian cooperation as it
                addresses the root “mental” causes of conflicts. (2) A Forecast
                and Processing program (FP3P) that is based on the MO and
                represents innovative treatment of the “physical” causes of
                conflicts. (3) An Actual world’s States Simulator (ASS) that
                reflects the output results of GP-WTM on the real world. (4)
                Results’ Collection and Dissemination Unit (RCDU) where the
                output results of performance evaluations of UPAP and FP3P via
                ASS are collected in RCDU and disseminated to the citizens of
                the VGS and to the real world. Instead of the ASS, which
                represents a current model that simulates the real-world with
                all its states, including important and decisive factors, a
                Visionary Model of the Globe (VMG) as a future model of what the
                real world will look like, as people hope, will be developed in
                the final stages, drawing incremental steps to transform the
                current model into it. This will turn the GIV into a concrete
                global vision."
              </p>
            </div>
          </>
        }
        show={showVirtualConstitution}
        close={closeModalVirtual}
      />
    </S.RegisterContainer>
  );
}
