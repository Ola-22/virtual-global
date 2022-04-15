import { useState } from "react";
import * as S from "./style";

export default function AboutVGS() {
  const [showMore, setShowMore] = useState(false);

  return (
    <S.AboutContainer>
      <div>
        <h1>About VGS</h1>
        <h6>Virtual Global State (VGS) in brief.</h6>
        <p>
          In light of the current situation of wars and human tragedies in the
          World and the absence of a promising horizon where real peace and
          constructive cooperation between people prevails, this proposal urges
          us to think outside the box, looking for creative solutions to try to
          change this reality. The World is made up of many nations and entities
          that differ in interests and goals. Therefore, it is difficult to
          build a unified strategy for a better future for human life on Earth!
          To overcome this reality, this ambitious – long term- proposal
          suggests the creation of a Virtual Global State (VGS) that liberates
          people from the complexities of their geopolitical, civilizational,
          ethnic, racial, religious and ideological differences, though
          respected, and helps address the world’s vital issues, with innovative
          ideas, freely and without restrictions. The goal is to Re-engineer
          Thoughts Toward a Better World. VGS will benefit from the tremendous
          development in Communications, Artificial Intelligence and Information
          Technologies. It is hoped to attract creative and constructive
          opinions and solutions from different citizens of the real states to
          problems in definite fields as a virtual simulation of reality. It is,
          indeed, the essential task of this proposal to revolutionize the way
          of thinking toward world’s critical issues. This will
        </p>
        {showMore && (
          <p>
            be based on two developed “intuitive” concepts: The Macroscopic
            Outlook (MO) and Missing Link (ML). Having a Virtual Constitution
            (VC), a flag, and a global anthem, every individual in the world has
            the right to belong to VGS and obtain its “virtual” citizenship,
            subject to approval of its constitution. The virtual “citizens” of
            the VGS are already parts of the real World in addition to being
            parts of the VGS. Hence, they will constitute a bridge between the
            two Worlds and will create a global public opinion for an acceptable
            and a stable level of peaceful and constructively cooperative real
            World. Free from the geopolitical, racial, ethnic and other
            determinants, VGS will form a positive pressure force on decision
            makers in the real-world to implement effective and rapid reforms
            that increase with increasing the number of members (virtual
            citizens) belonging to the VGS. It also represents a valuable guide
            for the real World to treat and solve actual problems and face real
            challenges. Meanwhile, a Global Interim Vision (GIV) of the VGS as a
            model for the future vision of the real-world is proposed to be
            developed by a VGS’ Wise Council (WC), elected by virtual “citizens”
            of the VGS. The formation of a World Transitional Mission (WTM) for
            the VGS whose task is to work towards achieving the desired GIV, and
            the democratic election of a Virtual Parliament (VP) are other two
            jobs of the WC. The VP forms a Virtual Government (VG) according to
            the VC. The VG, in its turn, forms a steering committee to direct
            and supervise the design of a Global Project to implement the WTM
            (GP-WTM). The GP-WTM is split into four components as follows: (1) A
            Universally agreed, trans-culture, Persuasive and Advisory Program
            (UPAP) which represents the ML that may shorten the way toward more
            peaceful culture and humanitarian cooperation as it addresses the
            root “mental” causes of conflicts. (2) A Forecast and Processing
            program (FP3P) that is based on the MO and represents innovative
            treatment of the “physical” causes of conflicts. (3) An Actual
            world’s States Simulator (ASS) that reflects the output results of
            GP-WTM on the real world. (4) Results’ Collection and Dissemination
            Unit (RCDU) where the output results of performance evaluations of
            UPAP and FP3P via ASS are collected in RCDU and disseminated to the
            citizens of the VGS and to the real world. Instead of the ASS, which
            represents a current model that simulates the real-world with all
            its states, including important and decisive factors, a Visionary
            Model of the Globe (VMG) as a future model of what the real world
            will look like, as people hope, will be developed in the final
            stages, drawing incremental steps to transform the current model
            into it. This will turn the GIV into a concrete global vision.
          </p>
        )}
        <button onClick={() => setShowMore(!showMore)}>Read More</button>
      </div>
      <div>
        <img src="/images/About.png" alt="read the about information" />
      </div>
    </S.AboutContainer>
  );
}
