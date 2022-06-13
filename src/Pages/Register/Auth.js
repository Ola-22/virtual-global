import axiosInstance from "../../helpers/axios";

const SignUp = (
  f_name,
  l_name,
  email,
  password,
  password_confirmation,
  dob,
  country_birth_id,
  academic_level_id,
  specialization_id,
  gender,
  accept_terms_conditions,
  accept_constitution_terms,
  language
) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  return axiosInstance
    .post(
      "/api/signup",
      {
        f_name,
        l_name,
        email,
        password,
        password_confirmation,
        dob,
        country_birth_id,
        academic_level_id,
        specialization_id,
        gender,
        accept_terms_conditions,
        accept_constitution_terms,
      },
      config
    )
    .then((response) => {
      if (response.data.items.token) {
        localStorage.setItem("user", JSON.stringify(response.data.items.token));
      }

      return response.data;
    });
};

const SignIn = (email, password) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  return axiosInstance
    .post(
      "/api/signin",
      {
        email,
        password,
      },
      config
    )
    .then((response) => {
      if (response.data.items.token) {
        localStorage.setItem("user", JSON.stringify(response.data.items.token));
      }

      return response.data;
    });
};

const logout = async () => {
  await axiosInstance
    .post("/api/sign-out", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    })
    .then((res) => {
      localStorage.removeItem("user");
    })
    .catch((err) => {});
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  SignUp,
  SignIn,
  logout,
  getCurrentUser,
};

export default authService;
