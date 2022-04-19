import * as S from "./style";

export default function Register() {
  return (
    <S.RegisterContainer>
      <S.RegisterBox>
        <h2>virtual citizenship registration</h2>
        <S.RegisterContent>
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter Here" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Here" />
          </div>
        </S.RegisterContent>

        <label>Email</label>
        <input type="email" placeholder="Enter Here" />

        <S.RegisterContent>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter Here" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter Here" />
          </div>
        </S.RegisterContent>

        <S.RegisterContent>
          <div>
            <label>Date of Birth</label>
            <input type="date" placeholder="Example NOV 11 1990" />
          </div>
          <div>
            <label>Country of Birth</label>
            <select placeholder="Select from here" />
          </div>
        </S.RegisterContent>

        <S.RegisterGender>
          <label>Gender</label>
          <div>
            <div>
              <input type="radio" />
              <span>Male</span>
            </div>
            <div className="gender">
              <input type="radio" />
              <span>Female</span>
            </div>
          </div>
        </S.RegisterGender>

        <S.RegisterContent>
          <div>
            <label>Academic Level</label>
            <select name="degree">
              <option value="Select from here">Select from here</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master's">Master's</option>
              <option value="Specialist">Specialist</option>
            </select>
          </div>
          <div>
            <label>Major of Interest, Specialization </label>

            <select name="major">
              <option value="Select from here">Select from here</option>
              <option value="IT">IT</option>
              <option value="Medical">Medical</option>
              <option value="IT & C">IT & C</option>
            </select>
          </div>
        </S.RegisterContent>
        <S.RegisterGender>
          <div>
            <input type="checkbox" />
            <span>
              Accept on the peamable of the
              <S.AnchorTag>Virtual Constitution Terms</S.AnchorTag>
            </span>
          </div>
        </S.RegisterGender>

        <S.RegisterGender>
          <div>
            <input type="checkbox" />
            <span>
              Accept on <S.AnchorTag>Terms & Conditions</S.AnchorTag> And{" "}
              <S.AnchorTag>Privacy Policy</S.AnchorTag>
            </span>
          </div>
        </S.RegisterGender>
      </S.RegisterBox>
    </S.RegisterContainer>
  );
}
