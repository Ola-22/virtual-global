import * as S from "./style";
import Accordion from "./Accordion";
import axiosInstance from "../../helpers/axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

function AnswerQuestions({ homeData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");

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
      text: "dd",
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
        // setMessage(res.data);
        // console.log("contact", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setEmail("");
    setMobile("");
    setSubject("");
  }

  // useEffect(() => {
  //   sendData();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [show, setShow] = useState(true);
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
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <h1>Answer & Questions</h1>
        <div style={{ cursor: "pointer" }}>
          <Accordion homeData={homeData} />
        </div>
      </div>
      <div>
        <h1>Let's Talk</h1>

        <p
          dangerouslySetInnerHTML={{
            __html: homeData?.items?.contact_us_section?.text,
          }}
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name ?? ""}
            onChange={(e) => setName(e.target.value)}
          />
          {error}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={mobile ?? ""}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <label htmlFor="tell-us">Tell Us About Anything *</label>
          <textarea
            id="tell-us"
            rows="4"
            cols="50"
            value={subject ?? ""}
            onChange={(e) => setSubject(e.target.value)}
          />

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

          {/* <h4 style={{ marginBottom: "20px" }}>{message?.message}</h4> */}

          {show || <div>{message?.message}</div>}
        </form>
      </div>
    </S.AnswerContainer>
  );
}

export default AnswerQuestions;
