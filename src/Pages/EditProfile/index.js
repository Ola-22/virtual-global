import Button from "../../Components/Button";
import Nav from "../../Components/Nav";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile({ settingsData }) {
  const [file, setFile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  // console.log(file);

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
      .get("/api/web-site/categories/academic_levels")
      .then((res) => {
        setCategory(res.data?.items);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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

    console.log("img", dataImg);
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        // lang: "en",
      },
    };

    console.log("E", file);
    axiosInstance
      .post(`/api/user/profile/update`, dataImg, config)
      .then((res) => {
        console.log("edit-profile", res);
        setEditProfile(res.data);
        if (res.data.status === true) {
          navigate("/profile");
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/countries")
      .then((res) => {
        setCountry(res.data?.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.MainEdit>
      <Nav settingsData={settingsData} />
      <S.EditProfile>
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
              change picture
            </label>
          </div>
        </S.userImage>

        <div className="box-inputs">
          <S.boxInput>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                placeholder="Enter Here"
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
              <label>Last Name</label>

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
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Here"
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
              <label>Date of Birth</label>
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
              <label>Gender</label>
              <div className="gender">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Male</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Female</span>
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
          <Button title="Update" onClick={() => UpdateProfile()} />
        </div>
      </S.EditProfile>
    </S.MainEdit>
  );
}

export default EditProfile;
