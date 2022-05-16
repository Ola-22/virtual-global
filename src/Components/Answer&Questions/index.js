import * as S from "./style";
import Accordion from "./Accordion";
import axiosInstance from "../../helpers/axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

function AnswerQuestions({ homeData }) {
  const [contactData, setContactData] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  async function sendData() {
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      subject: subject,
      text: text,
    };
    const config = {
      headers: {
        Accept: "application/json",
        lang: "en",
      },
    };
    await axiosInstance
      .post("/api/web-site/contact-us", data, config)
      .then((res) => {
        // console.log("contact", res.data);
        setContactData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setEmail("");
    setMobile("");
    setSubject("");
    setText("");
  }

  // useEffect(() => {
  //   sendData();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <S.AnswerContainer>
      <div style={{ width: "545px" }}>
        <h1>Answer & Questions</h1>
        <div style={{ cursor: "pointer" }}>
          <Accordion homeData={homeData} />
        </div>
      </div>
      <div className="main-box">
        <h1>Let's Talk</h1>

        <p
          dangerouslySetInnerHTML={{
            __html: homeData?.items?.contact_us_section?.text,
          }}
        />

        <form onSubmit={handleSubmit}>
          <S.container>
            <S.animationBox>
              <label>Name</label>
              <input
                type="text"
                value={name ?? ""}
                onChange={(e) => setName(e.target.value)}
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
                <label>Email</label>
                <input
                  type="email"
                  value={email ?? ""}
                  onChange={(e) => setEmail(e.target.value)}
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

            <S.container>
              <S.animationBox>
                <label>Phone</label>
                <input
                  type="text"
                  value={mobile ?? ""}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </S.animationBox>

              {contactData?.status === false
                ? contactData?.items?.map(
                    (err, index) =>
                      err?.field_name === "mobile" && (
                        <h3 key={index}>{err.message}</h3>
                      )
                  )
                : ""}
            </S.container>
          </div>
          <label htmlFor="tell-us">Tell Us About Anything *</label>

          <S.container>
            <S.animationBox>
              <label>Subject</label>
              <input
                type="text"
                value={subject ?? ""}
                onChange={(e) => setSubject(e.target.value)}
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
              <label>Text</label>
              <textarea
                id="tell-us"
                rows="4"
                cols="50"
                value={text ?? ""}
                onChange={(e) => setText(e.target.value)}
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
              Send
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
              Send
              <FaSpinner icon="spinner" />
            </button>
          )}

          {show ||
            (contactData?.status === true && (
              <div style={{ color: "green" }}>{contactData?.message}</div>
            ))}
        </form>
      </div>
    </S.AnswerContainer>
  );
}

export default AnswerQuestions;
