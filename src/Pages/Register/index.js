import * as S from "./style";
import React, { useState, useEffect } from "react";
import { Modal } from "../../Components/Modal";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import axiosInstance from "../../helpers/axios";

export default function Register() {
  const [gender, setGender] = useState();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showVirtualConstitution, setShowVirtualConstitution] = useState(false);
  const [showCouncil, setShowCouncil] = useState(false);

  const [dataTerms, setDataTerms] = useState({});
  const [dataPrivacy, setDataPrivacy] = useState({});
  const [constitutionTerms, setConstitutionTerms] = useState({});
  const [category, setCategory] = useState();

  const closeModalTerms = () => setShowTerms(false);

  const closeModalPrivacy = () => setShowPrivacyPolicy(false);

  const closeModalVirtual = () => setShowVirtualConstitution(false);

  const closeModalCouncil = () => setShowCouncil(false);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/terms")
      .then((res) => {
        setDataTerms(res.data);
        // console.log("0", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/privacy_policy")
      .then((res) => {
        setDataPrivacy(res.data);
        // console.log("privacy", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/constitution_terms")
      .then((res) => {
        setConstitutionTerms(res.data);
        // console.log("constitution_terms", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/academic_levels")
      .then((res) => {
        setCategory(res.data);
        console.log("acadi", res.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <Button onClick={() => setShowCouncil(true)} title="Register Now" />

        {showCouncil ? (
          <div onClick={closeModalCouncil} className="back-drop"></div>
        ) : null}

        <Modal
          content={
            <>
              <div className="modal-header close">
                <span onClick={closeModalCouncil} className="close-modal-btn">
                  <img src="/images/close.png" alt="close the Modal" />
                </span>
              </div>

              <div className="modal-body council">
                <img width="112" src="/images/council.png" alt="council" />
                <p>
                  Do you nominate yourself to be a candidate member of the
                  Council of the Wise of the VGS? Why?
                </p>
                <div className="container">
                  <button>Yes</button>
                  <button>No</button>
                </div>
                <div className="answer">
                  <label htmlFor="answer">Why?</label>

                  <textarea
                    id="w3review"
                    name="answer"
                    defaultValue="Write here"
                  />
                </div>
                <Button title="send" img />
              </div>
            </>
          }
          show={showCouncil}
          close={closeModalCouncil}
        />

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
              <p>{dataTerms?.items?.title}</p>
              <span onClick={closeModalTerms} className="close-modal-btn">
                <img src="/images/close.png" alt="close the Modal" />
              </span>
            </div>

            <div
              className="modal-body data"
              dangerouslySetInnerHTML={{ __html: dataTerms?.items?.text }}
            />
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
              <p>{dataPrivacy?.items?.title}</p>
              <span onClick={closeModalPrivacy} className="close-modal-btn">
                <img src="/images/close.png" alt="close the Modal" />
              </span>
            </div>

            <div className="modal-body">
              <div
                className="modal-body data"
                dangerouslySetInnerHTML={{ __html: dataPrivacy?.items?.text }}
              />
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
              <p>{constitutionTerms?.items?.title}</p>

              <span onClick={closeModalVirtual} className="close-modal-btn">
                <img src="/images/close.png" alt="close the Modal" />
              </span>
            </div>

            <div className="modal-body">
              <div
                className="modal-body data"
                dangerouslySetInnerHTML={{
                  __html: constitutionTerms?.items?.text,
                }}
              />
            </div>
          </>
        }
        show={showVirtualConstitution}
        close={closeModalVirtual}
      />
    </S.RegisterContainer>
  );
}
