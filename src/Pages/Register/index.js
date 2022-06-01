import * as S from "./style";
import React, { useState, useEffect } from "react";
import { Modal } from "../../Components/Modal";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import axiosInstance from "../../helpers/axios";
import authService from "./Auth";

export default function Register({ language, settingsData }) {
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

  const [state, setState] = useState({
    fname: "",
    lname: "",
    password: "",
    confirmPass: "",
    email: "",
  });

  const [date, setDate] = useState("");

  const closeModalTerms = () => setShowTerms(false);

  const closeModalPrivacy = () => setShowPrivacyPolicy(false);

  const closeModalVirtual = () => setShowVirtualConstitution(false);

  const closeModalCouncil = () => setShowCouncil(false);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/terms", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setDataTerms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/privacy_policy", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setDataPrivacy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/constitution_terms", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setConstitutionTerms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/academic_levels", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setCategory(res.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/specializations", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setSpecializations(res.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/countries", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setCountry(res.data?.items);
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
            if (response.status === true) {
              // console.log("Sign up successfully", response.items.token);
              // navigate("/");
              setShowCouncil(true);
            }

            setRegisterData(response);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const [val, setVal] = useState(null);
  const [textReason, setTextReason] = useState("");

  async function sendRequestMember() {
    const data = {
      approval_status: val,
      reason: textReason,
    };
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post(`/api/user/member-nomination-request/save`, data, config)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    sendRequestMember();
  });

  return (
    <S.Main>
      <S.HeaderRegister>
        <Link to="/">
          <img src="/images/Back.png" alt="back pages" />
        </Link>
      </S.HeaderRegister>
      <S.RegisterContainer>
        <S.RegisterBox>
          <S.MainRegister>
            <Link to="/">
              <h2>{settingsData?.items?.translation?.title_register}</h2>
            </Link>
            <S.RegisterContent>
              <div>
                <label>{settingsData?.items?.translation?.first_name}</label>
                <input
                  type="text"
                  name="fname"
                  placeholder={
                    settingsData?.items?.translation?.placeholder_pages
                  }
                  value={state.fname}
                  id="fname"
                  onChange={handleChange}
                />
                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "f_name" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>

              <div>
                <label>{settingsData?.items?.translation?.Last_Name}</label>

                <input
                  type="text"
                  name="lname"
                  placeholder={
                    settingsData?.items?.translation?.placeholder_pages
                  }
                  value={state.lname}
                  id="lname"
                  onChange={handleChange}
                />

                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "l_name" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>
            </S.RegisterContent>
            <S.wrapperEmail>
              <label>{settingsData?.items?.translation?.email_profile}</label>
              <input
                type="email"
                name="email"
                placeholder={
                  settingsData?.items?.translation?.placeholder_pages
                }
                value={state.email}
                id="email"
                onChange={handleChange}
              />
              {registerData?.status === false &&
                registerData?.items?.map(
                  (err, index) =>
                    err?.field_name === "email" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </S.wrapperEmail>

            <S.RegisterContent>
              <div>
                <label>{settingsData?.items?.translation?._profile}</label>

                <input
                  type="password"
                  name="password"
                  placeholder={
                    settingsData?.items?.translation?.placeholder_pages
                  }
                  value={state.password}
                  id="password"
                  onChange={handleChange}
                />
                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "password" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>
              <div>
                <label>
                  {settingsData?.items?.translation?.Confirm_Password}
                </label>

                <input
                  type="password"
                  name="confirmPass"
                  placeholder={
                    settingsData?.items?.translation?.placeholder_pages
                  }
                  value={state.confirmPass}
                  id="confirmPass"
                  onChange={handleChange}
                />
              </div>
            </S.RegisterContent>

            <S.RegisterContent>
              <div>
                <label>{settingsData?.items?.translation?.Date_Birth}</label>
                <input
                  id="input-date"
                  type="date"
                  value={date ?? ""}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Example NOV 11 1990"
                />

                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "dob" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>
              <div>
                <label>{settingsData?.items?.translation?.country_birth}</label>

                <select
                  name="country"
                  value={categoryCountry}
                  onChange={(e) => setCategoryCountry(e.target.value)}
                >
                  <option
                    value={settingsData?.items?.translation?.Select_from_here}
                  >
                    {settingsData?.items?.translation?.Select_from_here}
                  </option>

                  {country?.map((country) => (
                    <>
                      <option key={country.id} value={country?.id}>
                        {country?.name}
                      </option>
                    </>
                  ))}
                </select>

                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "country_birth_id" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>
            </S.RegisterContent>

            <S.RegisterGender>
              <label>{settingsData?.items?.translation?.Gender}</label>
              <div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value={settingsData?.items?.translation?.gender_male}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>{settingsData?.items?.translation?.gender_male}</span>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value={settingsData?.items?.translation?.gender_female}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>{settingsData?.items?.translation?.gender_female}</span>
                </div>
              </div>
              {registerData?.status === false &&
                registerData?.items?.map(
                  (err, index) =>
                    err?.field_name === "gender" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </S.RegisterGender>

            <S.RegisterContent>
              <div>
                <label>
                  {settingsData?.items?.translation?.Academic_level}
                </label>
                <select
                  name="degree"
                  value={categoryDegree}
                  onChange={(e) => setCategoryDegree(e.target.value)}
                >
                  <option
                    value={settingsData?.items?.translation?.Select_from_here}
                  >
                    {settingsData?.items?.translation?.Select_from_here}
                  </option>

                  {category?.map((cat) => (
                    <>
                      <option key={cat.id} value={cat?.id}>
                        {cat?.name}
                      </option>
                    </>
                  ))}
                </select>
                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "academic_level_id" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>
              <div>
                <label>
                  {" "}
                  {settingsData?.items?.translation?.Major_Specialization}
                </label>

                <select
                  name="major"
                  value={categoryMajor}
                  onChange={(e) => setCategoryMajor(e.target.value)}
                >
                  <option
                    value={settingsData?.items?.translation?.Select_from_here}
                  >
                    {" "}
                    {settingsData?.items?.translation?.Select_from_here}
                  </option>

                  {specializations?.map((special) => (
                    <>
                      <option key={special.id} value={special?.id}>
                        {special?.name}
                      </option>
                    </>
                  ))}
                </select>

                {registerData?.status === false &&
                  registerData?.items?.map(
                    (err, index) =>
                      err?.field_name === "specialization_id" && (
                        <h3 className="error" key={index}>
                          {err.message}
                        </h3>
                      )
                  )}
              </div>
            </S.RegisterContent>
            <S.RegisterGender>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={acceptConstitution}
                  onChange={(e) => setAcceptConstitution(e.target.checked)}
                />
                <div className="flex-column">
                  <span>
                    {settingsData?.items?.translation?.Accept_virtual_terms}
                    <S.AnchorTag
                      onClick={() => setShowVirtualConstitution(true)}
                    >
                      {settingsData?.items?.translation?.virtual_terms}
                    </S.AnchorTag>
                  </span>

                  {registerData?.status === false &&
                    registerData?.items?.map(
                      (err, index) =>
                        err?.field_name === "accept_constitution_terms" && (
                          <h3 className="error" key={index}>
                            {err.message}
                          </h3>
                        )
                    )}
                </div>
              </div>
            </S.RegisterGender>

            <S.RegisterGender>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
                <div className="flex-column">
                  <span>
                    {settingsData?.items?.translation?.accept_conditions}
                    <S.AnchorTag onClick={() => setShowTerms(true)}>
                      {settingsData?.items?.translation?.terms_conditions}
                    </S.AnchorTag>
                    &nbsp; And
                    <S.AnchorTag onClick={() => setShowPrivacyPolicy(true)}>
                      {settingsData?.items?.translation?.privacy_policy}
                    </S.AnchorTag>
                  </span>

                  {registerData?.status === false &&
                    registerData?.items?.map(
                      (err, index) =>
                        err?.field_name === "accept_terms_conditions" && (
                          <h3 className="error" key={index}>
                            {err.message}
                          </h3>
                        )
                    )}
                </div>
              </div>
            </S.RegisterGender>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSignup();

                // setShowCouncil(true);
              }}
              title={settingsData?.items?.translation?.button_join}
            />

            {showCouncil ? (
              <div onClick={closeModalCouncil} className="back-drop"></div>
            ) : null}

            <Modal
              content={
                <>
                  <div className="modal-header close">
                    <span
                      onClick={closeModalCouncil}
                      className="close-modal-btn"
                    >
                      <img src="/images/close.png" alt="close the Modal" />
                    </span>
                  </div>

                  <div className="modal-body council">
                    <img width="112" src="/images/council.png" alt="council" />
                    <p>{settingsData?.items?.translation?.question}</p>
                    <div className="container">
                      <button
                        className={val === "yes" ? "activeBtn" : ""}
                        onClick={() => setVal("yes")}
                      >
                        {settingsData?.items?.translation?.btn_yes}
                      </button>
                      <button
                        className={val === "no" ? "activeBtn" : ""}
                        onClick={() => setVal("no")}
                      >
                        {settingsData?.items?.translation?.btn_no}
                      </button>
                    </div>
                    <div className="answer">
                      <label htmlFor="answer">
                        {settingsData?.items?.translation?.answer_council_wise}?
                      </label>

                      <textarea
                        id="w3review"
                        name="answer"
                        placeholder={
                          settingsData?.items?.translation
                            ?.placeholder_council_wise
                        }
                        onChange={(e) => setTextReason(e.target.value)}
                      />
                    </div>
                    <Button
                      className="send"
                      onClick={() => navigate("/")}
                      title={settingsData?.items?.translation?.btn_send}
                      img
                    />
                  </div>
                </>
              }
              show={showCouncil}
              close={closeModalCouncil}
            />

            <S.loginAccount>
              {settingsData?.items?.translation?.already_have_citizenship}
              <Link to="/login">{settingsData?.items?.translation?.enter}</Link>
            </S.loginAccount>
          </S.MainRegister>
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
      </S.RegisterContainer>{" "}
    </S.Main>
  );
}
