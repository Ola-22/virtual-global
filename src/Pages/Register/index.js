import * as S from "./style";
import React, { useState, useEffect } from "react";
import { Modal } from "../../Components/Modal";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import axiosInstance from "../../helpers/axios";
import authService from "./Auth";

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
  const [specializations, setSpecializations] = useState();
  const [country, setCountry] = useState();

  const [categoryDegree, setCategoryDegree] = useState("");

  const [categoryCountry, setCategoryCountry] = useState("");
  const [categoryMajor, setCategoryMajor] = useState("");

  const [acceptConstitution, setAcceptConstitution] = useState("");
  const [acceptTerms, setAcceptTerms] = useState("");

  // console.log("R", acceptConstitution);
  // console.log("T", acceptTerms);
  // const [token, setToken] = useState();

  const [state, setState] = useState({
    fname: "",
    lname: "",
    password: "",
    confirmPass: "",
    email: "",
  });

  const [date, setDate] = useState("");

  console.log(state.fname);
  console.log(state.lname);
  console.log(state.email);
  console.log(state.password);
  console.log("C", state.confirmPass);
  console.log(state.dob);
  console.log(categoryCountry);
  console.log(categoryDegree);
  console.log(categoryMajor);
  console.log(gender);

  console.log(date);

  // console.log(state.accept_terms_conditions);
  // console.log(state.accept_constitution_terms);

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
        setCategory(res.data?.items);
        // console.log("ac/adi", res.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/specializations")
      .then((res) => {
        setSpecializations(res.data?.items);
        // console.log("setSpecializations", res.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/countries")
      .then((res) => {
        setCountry(res.data?.items);
        console.log(country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState();
  const handleSignup = async (e) => {
    // e.preventDefault();
    try {
      await authService
        .SignUp(
          state.fname,
          state.lname,
          state.email,
          state.confirmPass,
          state.password,
          date,
          categoryCountry,
          categoryDegree,
          categoryMajor,
          gender,
          acceptConstitution,
          acceptTerms
        )
        .then(
          (response) => {
            console.log(response);

            if (response.status === true) {
              console.log("Sign up successfully", response.items.token);
              navigate("/");
            }

            setRegisterData(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (err) {
      console.log(err);
    }
  };

  console.log("T", registerData);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <S.RegisterContainer>
      <S.RegisterBox>
        <Link to="/">
          <h2>virtual citizenship registration</h2>
        </Link>
        <S.RegisterContent>
          <div>
            <label>First Name</label>
            {/* <input type="text" placeholder="Enter Here" /> */}

            <input
              type="text"
              name="fname"
              placeholder="Enter Here"
              value={state.fname}
              id="fname"
              onChange={handleChange}
            />
          </div>
          {registerData?.status === false &&
            registerData?.items?.map(
              (err, index) =>
                err?.field_name === "f_name" && (
                  <h3 key={index}>{err.message}</h3>
                )
            )}
          <div>
            <label>Last Name</label>

            <input
              type="text"
              name="lname"
              placeholder="Enter Here"
              value={state.lname}
              id="fname"
              onChange={handleChange}
            />
          </div>
        </S.RegisterContent>
        <S.wrapperEmail>
          <label>Email</label>
          {/* <input type="email" placeholder="Enter Here" /> */}
          <input
            type="email"
            name="email"
            placeholder="Enter Here"
            value={state.email}
            id="email"
            onChange={handleChange}
          />
        </S.wrapperEmail>

        <S.RegisterContent>
          <div>
            <label>Password</label>
            {/* <input type="password" placeholder="Enter Here" /> */}

            <input
              type="password"
              name="password"
              placeholder="Enter Here"
              value={state.password}
              id="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            {/* <input type="password" placeholder="Enter Here" /> */}

            <input
              type="password"
              name="confirmPass"
              placeholder="Enter Here"
              value={state.confirmPass}
              id="confirmPass"
              onChange={handleChange}
            />
          </div>
        </S.RegisterContent>

        <S.RegisterContent>
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              value={date ?? ""}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Example NOV 11 1990"
            />
          </div>
          <div>
            <label>Country of Birth</label>

            <select
              name="country"
              value={categoryCountry}
              onChange={(e) => setCategoryCountry(e.target.value)}
            >
              <option value="Select from here">Select from here</option>

              {country?.map((country) => (
                <>
                  <option key={country.id} value={country?.id}>
                    {country?.name}
                  </option>
                </>
              ))}
            </select>
          </div>
        </S.RegisterContent>

        <S.RegisterGender>
          <label>Gender</label>
          <div>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Male</span>
            </div>
            <div className="gender">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Female</span>
            </div>
          </div>
        </S.RegisterGender>

        <S.RegisterContent>
          <div>
            <label>Academic Level</label>
            <select
              name="degree"
              value={categoryDegree}
              onChange={(e) => setCategoryDegree(e.target.value)}
            >
              <option value="Select from here">Select from here</option>

              {category?.map((cat) => (
                <>
                  <option key={cat.id} value={cat?.id}>
                    {cat?.name}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div>
            <label>Major of Interest, Specialization </label>

            <select
              name="major"
              value={categoryMajor}
              onChange={(e) => setCategoryMajor(e.target.value)}
            >
              <option value="Select from here">Select from here</option>

              {specializations?.map((special) => (
                <>
                  <option key={special.id} value={special?.id}>
                    {special?.name}
                  </option>
                </>
              ))}
            </select>
          </div>
        </S.RegisterContent>
        <S.RegisterGender>
          <div>
            <input
              type="checkbox"
              defaultChecked={acceptConstitution}
              onChange={(e) => setAcceptConstitution(e.target.checked)}
            />
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
            <input
              type="checkbox"
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
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
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSignup();
            // setShowCouncil(true);
          }}
          title="Register Now"
        />

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
