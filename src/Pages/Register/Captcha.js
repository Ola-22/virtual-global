import React from "react";
// import Ca

// const Captcha = require("2captcha")

function Captcha() {
  const solver = new Captcha.Solver(process.env.REACT_SITE_KEY);

  /* Example ReCaptcha Website */
  solver
    .recaptcha(
      "6Ld2sf4SAAAAAKSgzs0Q13IZhY02Pyo31S2jgOB5",
      "https://patrickhlauke.github.io/recaptcha/"
    )

    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err.message);
    });
  return <div>Captcha</div>;
}

export default Captcha;
