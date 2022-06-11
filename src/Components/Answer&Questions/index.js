import * as S from "./style";
import Accordion from "./Accordion";
import axiosInstance from "../../helpers/axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

function AnswerQuestions({ homeData, settingsData, language }) {
  const [contactData, setContactData] = useState();

  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    text: "",
  });

  const [isActive, setIsActive] = useState(false);

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  async function sendData() {
    const data = {
      name: state.name,
      email: state.email,
      mobile: state.mobile,
      subject: state.subject,
      text: state.text,
    };
    const config = {
      headers: {
        Accept: "application/json",
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post("/api/web-site/contact-us", data, config)
      .then((res) => {
        setContactData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setState(
      { name: "" },
      { email: "" },
      { mobile: "" },
      { subject: "" },
      { text: "" }
    );
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });

    if (value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [show]);

  return (
    <S.AnswerContainer>
      <div className="accordion">
        <h1>{settingsData?.items?.translation?.answer_questions}</h1>
        <div style={{ cursor: "pointer" }}>
          <Accordion homeData={homeData} language={language} />
        </div>
      </div>
      <div className="main-box">
        <h1>{settingsData?.items?.translation?.contact_us}</h1>

        <p
          dangerouslySetInnerHTML={{
            __html: homeData?.items?.contact_us_section?.text,
          }}
        />

        <form onSubmit={handleSubmit}>
          <S.container>
            <S.animationBox>
              <label className={isActive ? "Active" : ""} htmlFor="name">
                {settingsData?.items?.translation?.first_name}
              </label>
              <input
                type="text"
                name="name"
                value={state.name}
                id="name"
                onChange={handleChange}
              />
            </S.animationBox>

            {contactData?.status === false
              ? contactData?.items?.map(
                  (err, index) =>
                    err?.field_name === "name" && (
                      <h3 key={index}>{err.message}</h3>
                    )
                )
              : ""}
          </S.container>

          <div className="box-inputs">
            <S.container>
              <S.animationBox>
                <label className={isActive ? "Active" : ""} htmlFor="email">
                  {settingsData?.items?.translation?.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={state.email ?? ""}
                  onChange={handleChange}
                />
              </S.animationBox>

              {contactData?.status === false
                ? contactData?.items?.map(
                    (err, index) =>
                      err?.field_name === "email" && (
                        <h3 key={index}>{err.message}</h3>
                      )
                  )
                : ""}
            </S.container>
          </div>
          <label htmlFor="tell-us" className="tell-us">
            {settingsData?.items?.translation?.tell_about}
          </label>

          <S.container>
            <S.animationBox>
              <label className={isActive ? "Active" : ""} htmlFor="subject">
                {settingsData?.items?.translation?.subject_form}
              </label>
              <input
                type="text"
                value={state.subject ?? ""}
                name="subject"
                onChange={handleChange}
              />
            </S.animationBox>
            {contactData?.status === false
              ? contactData?.items?.map(
                  (err, index) =>
                    err?.field_name === "subject" && (
                      <h3 key={index}>{err.message}</h3>
                    )
                )
              : ""}

            <S.animationBox>
              <label className={isActive ? "Active" : ""} htmlFor="text">
                {settingsData?.items?.translation?.text}
              </label>
              <textarea
                id="tell-us"
                rows="4"
                cols="50"
                value={state.text ?? ""}
                name="text"
                onChange={handleChange}
              />
            </S.animationBox>
          </S.container>

          {!loading && (
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                sendData();
                handleClick();
              }}
            >
              {settingsData?.items?.translation?.btn_send}
              <img src="/images/send.png" alt="send data form" />
            </button>
          )}

          {loading && (
            <button
              className="disabled"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                sendData();
                handleClick();
              }}
            >
              {settingsData?.items?.translation?.btn_send}

              <FaSpinner icon="spinner" />
            </button>
          )}

          {contactData?.status === true && show && (
            <div style={{ color: "green" }}>{contactData?.message}</div>
          )}
        </form>
      </div>
    </S.AnswerContainer>
  );
}

export default AnswerQuestions;
