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
  ref,
  end_register,
}) {
  return (
    <S.IDCardContainer ref={ref} id="Canvas">
      <S.IDCardBox>
        <img className="img-flag" src="/images/LogoImg.png" alt="" />
        <h1>{settingsData?.items?.translation?.virtual_global_card}</h1>
        <img
          className="union"
          width="66"
          height="44"
          src="/images/Union.png"
          alt=""
        />
      </S.IDCardBox>

      <S.VirtualID>
        <h1>{settingsData?.items?.translation?.vartual_national_id}</h1>
        <div className="virtual-box">
          <S.boxImageUser>
            <img className="img-user" src={src} alt="img of the user profile" />
            <h4>{settingsData?.items?.translation?.virtual_number}</h4>
            <p>{serial}</p>
          </S.boxImageUser>

          <S.boxCard>
            <div className="box-data">
              <div>
                <h4>{settingsData?.items?.translation?.Surname_Nom}</h4>

                <h3>{lname}</h3>
              </div>

              <div>
                <h4>{settingsData?.items?.translation?.Given_Names}</h4>
                <h3>{fname}</h3>
              </div>

              <div>
                <h4>{settingsData?.items?.translation?.Gender}</h4>
                <h3>{gender}</h3>
              </div>
              <div>
                <h4>{settingsData?.items?.translation?.date_birth}</h4>
                <h3>{date}</h3>
              </div>
            </div>

            <div className="box-data">
              <div>
                <h4>{settingsData?.items?.translation?.virtual_nationality}</h4>
                <h3 className="national">{national}</h3>
              </div>

              <div>
                <h4>{settingsData?.items?.translation?.place_birth}</h4>
                <h3>{country}</h3>
              </div>

              <div>
                <h4>{settingsData?.items?.translation?.date_register}</h4>
                <h3>{data_register}</h3>
              </div>

              <div>
                <h4>{settingsData?.items?.translation?.date_of_expiration}</h4>
                <h3>{end_register}</h3>
              </div>
            </div>
          </S.boxCard>
          <div style={{ alignSelf: "flex-end" }}>
            <S.QrCode src="/images/QRCode.png" alt="QR code of the user" />
          </div>
        </div>
      </S.VirtualID>
    </S.IDCardContainer>
  );
}

export default IDCard;
