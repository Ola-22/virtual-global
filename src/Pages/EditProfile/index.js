import Button from "../../Components/Button";
import Nav from "../../Components/Nav";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile({ settingsData, handleSetLanguage }) {
  const [file, setFile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const navigate = useNavigate();

  // function handleChangeImg(e) {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setFile(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // }

  const [category, setCategory] = useState();
  const [specializations, setSpecializations] = useState();
  const [country, setCountry] = useState();

  const [categoryDegree, setCategoryDegree] = useState("");

  const [categoryCountry, setCategoryCountry] = useState("");
  const [categoryMajor, setCategoryMajor] = useState("");
  const [gender, setGender] = useState();

  const [state, setState] = useState({
    fname: "",
    lname: "",
    password: "",
    confirmPass: "",
    email: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const [date, setDate] = useState("");

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
  }, [handleSetLanguage]);

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
  }, [handleSetLanguage]);

  const [editProfile, setEditProfile] = useState();
  async function UpdateProfile() {
    const dataImg = new FormData();
    dataImg.append("image", file);
    dataImg.append("f_name", state.fname);
    dataImg.append("l_name", state.lname);
    dataImg.append("email", state.email);
    dataImg.append("dob", date);
    dataImg.append("country_birth_id", categoryCountry);
    dataImg.append("academic_level_id", categoryDegree);
    dataImg.append("specialization_id", categoryMajor);
    dataImg.append("gender", gender);

    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };

    axiosInstance
      .post(`/api/user/profile/update`, dataImg, config)
      .then((res) => {
        setEditProfile(res.data);
        if (res.data.status === true) {
          navigate("/profile");
        }
      })
      .catch((err) => console.log(err));
  }

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
  }, [handleSetLanguage]);

  return (
    <S.MainEdit>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />
      <>
        <S.userImage>
          <img className="user-img" src={file} alt="user img" />

          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              {settingsData?.items?.translation?.change_pic}
            </label>
          </div>
        </S.userImage>

        <div className="box-inputs">
          <S.boxInput>
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
              {editProfile?.status === false &&
                editProfile?.items?.map(
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
                placeholder="Enter Here"
                value={state.lname}
                id="lname"
                onChange={handleChange}
              />
              {editProfile?.status === false &&
                editProfile?.items?.map(
                  (err, index) =>
                    err?.field_name === "l_name" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </div>
          </S.boxInput>
          <S.boxInput>
            <div>
              <label>{settingsData?.items?.translation?.email}</label>
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
              {editProfile?.status === false &&
                editProfile?.items?.map(
                  (err, index) =>
                    err?.field_name === "email" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </div>
            <div>
              <label>{settingsData?.items?.translation?.Date_Birth}</label>
              <input
                type="date"
                value={date ?? ""}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Example NOV 11 1990"
              />
              {editProfile?.status === false &&
                editProfile?.items?.map(
                  (err, index) =>
                    err?.field_name === "dob" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </div>
          </S.boxInput>

          <S.boxInput>
            <div>
              <label>{settingsData?.items?.translation?.country_birth}</label>

              <select
                name="country"
                value={categoryCountry}
                onChange={(e) => setCategoryCountry(e.target.value)}
              >
                <option value="Select from here">
                  {" "}
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

              {editProfile?.status === false &&
                editProfile?.items?.map(
                  (err, index) =>
                    err?.field_name === "country_birth_id" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </div>

            <div>
              <label>{settingsData?.items?.translation?.gender}</label>
              <div className="gender">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>{settingsData?.items?.translation?.gender_male}</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>{settingsData?.items?.translation?.gender_female}</span>
                </div>
              </div>
              {editProfile?.status === false &&
                editProfile?.items?.map(
                  (err, index) =>
                    err?.field_name === "gender" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </div>
          </S.boxInput>
          <S.boxInput>
            <div>
              <label>{settingsData?.items?.translation?.Academic_level}</label>
              <select
                name="degree"
                value={categoryDegree}
                onChange={(e) => setCategoryDegree(e.target.value)}
              >
                <option value="Select from here">
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

              {editProfile?.status === false &&
                editProfile?.items?.map(
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
                {settingsData?.items?.translation?.Major_Specialization}
              </label>
              <select
                name="major"
                value={categoryMajor}
                onChange={(e) => setCategoryMajor(e.target.value)}
              >
                <option value="Select from here">
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
              {editProfile?.status === false &&
                editProfile?.items?.map(
                  (err, index) =>
                    err?.field_name === "specialization_id" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )}
            </div>
          </S.boxInput>
          <Button
            title={settingsData?.items?.translation?.btn_update}
            onClick={() => UpdateProfile()}
          />
        </div>
      </>
    </S.MainEdit>
  );
}

export default EditProfile;
