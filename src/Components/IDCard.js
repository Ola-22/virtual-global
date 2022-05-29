import * as S from "./style";

function IDCard({
  src,
  fname,
  lname,
  gender,
  national,
  country,
  date,
  settingsData,
  serial,
  data_register,
}) {
  return (
    <S.IDCardContainer>
      <S.IDCardBox>
        <img width="76" height="44" src="/images/LogoImg.png" alt="" />
        <h1>{settingsData?.items?.translation?.virtual_global_card}</h1>
        <img width="66" height="40" src="/images/Union.png" alt="" />
      </S.IDCardBox>

      <S.VirtualID>
        <h1>{settingsData?.items?.translation?.vartual_national_id}</h1>
        <div className="virtual-box">
          <div>
            <img
              className="img-user"
              width="120"
              height="120"
              src={src}
              alt="img of the user profile"
            />
            <h4>{settingsData?.items?.translation?.virtual_number}</h4>
            <p>{serial}</p>
          </div>

          <S.boxCard>
            <div>
              <h4>{settingsData?.items?.translation?.Surname_Nom}</h4>

              <h3>{lname}</h3>
            </div>

            <div>
              <h4>{settingsData?.items?.translation?.Given_Names}</h4>
              <h3>{fname}</h3>
            </div>

            <div>
              <h4>{settingsData?.items?.translation?.date_birth}</h4>
              <h3>{date}</h3>
            </div>

            <div>
              <h4>{settingsData?.items?.translation?.date_register}</h4>
              <h3>{data_register}</h3>
            </div>
          </S.boxCard>

          <S.boxCard>
            <div>
              <h4>{settingsData?.items?.translation?.Gender}</h4>
              <h3>{gender}</h3>
            </div>

            <div>
              <h4>{settingsData?.items?.translation?.virtual_nationality}</h4>
              <h3>{national}</h3>
            </div>

            <div>
              <h4>{settingsData?.items?.translation?.place_birth}</h4>
              <h3>{country}</h3>
            </div>
          </S.boxCard>
          <div style={{ alignSelf: "flex-end" }}>
            <img
              width="50"
              height="50"
              src="/images/QR-Code.png"
              alt="QR code of the user"
            />
          </div>
        </div>
      </S.VirtualID>
    </S.IDCardContainer>
  );
}

export default IDCard;
