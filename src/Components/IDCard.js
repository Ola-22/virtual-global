import * as S from "./style";

function IDCard({ src, fname, lname, gender, national, country, date }) {
  return (
    <S.IDCardContainer>
      <S.IDCardBox>
        <img width="76" height="44" src="/images/LogoImg.png" alt="" />
        <h1>VIRTUAL GLOBAL STATE / PAYS GLOBAL VIRTUEL</h1>
        <img width="66" height="40" src="/images/Union.png" alt="" />
      </S.IDCardBox>

      <S.VirtualID>
        <h1>VIRTUAL NATIONAL ID CARD/ CARTE D'ID NATIONALE VIRTUELLE</h1>
        <div className="virtual-box">
          <div>
            <img
              className="img-user"
              width="120"
              height="120"
              src={src}
              alt="img of the user profile"
            />
            <h4>Virtual ID Number/ Numéro d'ID Virtuel</h4>
            <p>00001001</p>
          </div>

          <S.boxCard>
            <div>
              <h4>Surname/Nom</h4>
              <h3>{lname}</h3>
            </div>

            <div>
              <h4>Given Names/ prénom</h4>
              <h3>{fname}</h3>
            </div>

            <div>
              <h4>Date of birth/ Date de naissance</h4>
              <h3>{date}</h3>
            </div>

            <div>
              <h4>Date of issue/ Date de délivrance</h4>
              <h3>01/03/2022</h3>
            </div>
          </S.boxCard>

          <S.boxCard>
            <div>
              <h4>Gender/ sexe</h4>
              <h3>{gender}</h3>
            </div>

            <div>
              <h4>Virtual Nationality/ Nationalité virtuelle</h4>
              <h3>{national}</h3>
            </div>

            <div>
              <h4>Place of birth/ Lieu de naissance</h4>
              <h3>{country}</h3>
            </div>

            <div>
              <h4>Date of expiration/ Date d'expiration</h4>
              <h3>01/03/2032</h3>
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
