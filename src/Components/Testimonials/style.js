import styled from "styled-components";

export const Container = styled.div`
  /* min-height: 828px;
  padding-top: 10%; */

  position: relative;
  padding-top: 70px;
  padding-bottom: 121px;

  & h1 {
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 89px;

    &::after {
      content: "";
      width: 91px;
      height: 5px;
      color: #4bb1f1;
      background-color: #4bb1f1;
      position: absolute;
      margin-inline-start: 46%;
      display: flex;
    }
  }

  & .slick-slide {
    max-width: 361px;
    width: 100%;
  }

  & .slick-track {
    display: flex;
    justify-content: space-around;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 361px;
  width: 100%;

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }

  & .card-box {
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-evenly;
    width: 100%;
    max-width: 90%;
    min-height: 400px;
    height: 100%;

    & img {
      width: 142px;
      height: 142px;
      object-fit: cover;
      border-radius: 50%;
    }

    & h3 {
      font-size: 20px;
    }

    & p {
      line-height: 1.5;
      text-align: center;
      font-size: 16px;
      font-weight: normal;
    }
  }

  .two {
    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  }
`;
// export const CardContainer = styled.div`
//   min-height: 484px;
//   height: 100%;
//   border-radius: 10px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//   margin-top: 2%;
//   margin-bottom: 2%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 100%;

//   & .card-box {
//     display: flex;
//     align-items: center;
//     flex-flow: column;
//     justify-content: space-evenly;
//     width: 100%;
//     max-width: 90%;
//     min-height: 400px;
//     height: 100%;

//     & img {
//       width: 142px;
//       height: 142px;
//       object-fit: cover;
//       border-radius: 50%;
//     }

//     & h3 {
//       font-size: 20px;
//     }

//     & p {
//       line-height: 1.5;
//       text-align: center;
//       font-size: 16px;
//       font-weight: normal;
//     }
//   }
// `;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & span {
    color: #f4c01e;

    & svg {
      width: 22px;
      height: 21px;
    }
  }
`;
