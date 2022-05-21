import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState, useEffect } from "react";
import LikeTopic from "../../Components/LikeTopic";
import IDCard from "../../Components/IDCard";
import { Modal } from "../../Components/Modal";
import axiosInstance from "../../helpers/axios";
import Tab from "../../Components/Tabs/Tab";
import TabNav from "../../Components/Tabs/TabNav";
import Button from "../../Components/Button";

function Profile({ settingsData }) {
  const [showForm, setShowForm] = useState(false);

  const closeModalTerms = () => setShowForm(false);

  const [file, setFile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  // console.log(file);

  // function handleChangeImg(e) {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setFile(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // }

  const [lastActivity, setLastActivity] = useState();
  const [selected, setSelected] = useState("Like Discussions");

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

  const SelectTab = (tab) => {
    setSelected(tab);
  };

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
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/last-activities`,

        config
      )
      .then((res) => {
        console.log("laseActive", res);
        setLastActivity(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const [profileInformation, setProfileInformation] = useState();
  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/profile/edit`,

        config
      )
      .then((res) => {
        console.log("profile", res);
        setProfileInformation(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const [editProfile, setEditProfile] = useState();
  async function UpdateProfile() {
    const dataImg = new FormData();
    dataImg.append("image", file);

    const data = {
      f_name: state.fname,
      l_name: state.lname,
      email: state.email,
      dob: date,
      country_birth_id: categoryCountry,
      academic_level_id: categoryDegree,
      specialization_id: categoryMajor,
      gender: gender,
      dataImg,
    };
    console.log("img", dataImg);
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },

  function handleChangeImg(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };

    console.log("E", file);
    axiosInstance
      .post(`/api/user/profile/update`, data, config)
      .then((res) => {
        console.log("edit-profile", res);
        // setProfileInformation(res.data.items);
        setEditProfile(res.data);
      })
      .catch((err) => console.log(err));
  }

  const [lastActivity, setLastActivity] = useState();
  const [selected, setSelected] = useState("Like Discussions");

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

  const SelectTab = (tab) => {
    setSelected(tab);
  };

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
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/last-activities`,

        config
      )
      .then((res) => {
        console.log("laseActive", res);
        setLastActivity(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const [profileInformation, setProfileInformation] = useState();
  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/profile/edit`,

        config
      )
      .then((res) => {
        console.log("profile", res);
        setProfileInformation(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const [editProfile, setEditProfile] = useState();
  async function UpdateProfile() {
    const dataImg = new FormData();
    dataImg.append("image", file);

    const data = {
      f_name: state.fname,
      l_name: state.lname,
      email: state.email,
      dob: date,
      country_birth_id: categoryCountry,
      academic_level_id: categoryDegree,
      specialization_id: categoryMajor,
      gender: gender,
      image: dataImg,
    };
    console.log("img", dataImg);
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    console.log("E", file);
    axiosInstance
      .post(`/api/user/profile/update`, data, config)
      .then((res) => {
        console.log("edit-profile", res);
        // setProfileInformation(res.data.items);
        setEditProfile(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/categories/countries")
      .then((res) => {
        setCountry(res.data?.items);
        // console.log(country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <S.ProfileContainer>
        <div className="profile-main">
          <div className="box">
            <div className="virtual-id">
              <h3>virtual national id card</h3>
              <IDCard
                src={profileInformation?.user?.image}
                fname={profileInformation?.user?.first_name}
                lname={profileInformation?.user?.last_name}
                gender={profileInformation?.user?.gender}
                national={profileInformation?.user?.country_birth_id}
                country={profileInformation?.user?.country_birth_id}
                date={profileInformation?.user?.dob}
              />
            </div>
            <div className="profile-information">
              <>
                <S.profileInformation>
                  <h2>profile information's</h2>
                  <img
                    className="edit"
                    src="/images/edit.png"
                    alt="edit your profile"
                    onClick={() => setShowForm(true)}
                  />
                </S.profileInformation>
              </>

              {showForm ? (
                <div onClick={closeModalTerms} className="back-drop"></div>
              ) : null}

              <S.profileInformation className="box-profile">
                <S.imgUser
                  className="profile-img"
                  src={profileInformation?.user?.image}
                  alt="user img"
                />
                <label>email</label>
                <h4>{profileInformation?.user?.email}</h4>
              </S.profileInformation>
              <S.profileInformation className="box-profile">
                <label>password</label>
                <h4>*****</h4>
              </S.profileInformation>

              <S.profileInformation>
                <button>change password</button>
              </S.profileInformation>
            </div>
          </div>
          <S.lastActivity>
            <h2>last activities</h2>

            <TabNav
              tabs={["Like Discussions", "Comment Discussions"]}
              selected={selected}
              SelectTab={SelectTab}
            >
              <>
                <Tab isSelected={selected === "Like Discussions"}>
                  {lastActivity?.last_likes_discussions?.map((activity) => (
                    <LikeTopic
                      date={activity?.created_at}
                      paragraph={activity?.comment}
                      name="Alex Fordman"
                      time="30 min"
                      comment={activity.discussion.text}
                    />
                  ))}
                </Tab>

                <Tab isSelected={selected === "Comment Discussions"}>
                  {lastActivity?.last_comments_discussions?.map((activity) => (
                    <LikeTopic
                      date={activity?.created_at}
                      paragraph={activity?.comment}
                      name="Alex Fordman"
                      time="30 min"
                      comment={activity.discussion.text}
                    />
                  ))}
                </Tab>
              </>
            </TabNav>
          </S.lastActivity>
        </div>
        <Footer settingsData={settingsData} />
      </S.ProfileContainer>

      <S.ModalWrapper>
        {showForm && (
          <Modal
            content={
              <>
                <div className="edit-profile">
                  <p>Edit Profile</p>
                  <span onClick={closeModalTerms}>
                    <img src="/images/close.png" alt="close the Modal" />
                  </span>
                </div>
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

                <div className="modal-body">
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
                        <option value="Select from here">
                          Select from here
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
                        <option value="Select from here">
                          Select from here
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
                      <label>Major of Interest, Specialization </label>
                      <select
                        name="major"
                        value={categoryMajor}
                        onChange={(e) => setCategoryMajor(e.target.value)}
                      >
                        <option value="Select from here">
                          Select from here
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
                  <Button title="Update" onClick={() => UpdateProfile()} />
                </div>
              </>
            }
            show={showForm}
            close={closeModalTerms}
          />
        )}
      </S.ModalWrapper>
    </div>
  );
}

export default Profile;
