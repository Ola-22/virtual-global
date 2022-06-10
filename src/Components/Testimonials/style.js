import styled from "styled-components";

export const Container = styled.div`
  /* min-height: 828px;
  padding-top: 10%; */

  position: relative;
  padding-top: 70px;
  padding-bottom: 121px;
  background: linear-gradient(
      to right,
      rgba(241, 242, 245, 0.9),
      rgba(241, 242, 245, 0.9)
    ),
    url(/images/background.png);
  background-size: cover;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

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

  /* & .slick-slide {
    max-width: 361px;
    width: 100%;
    @media (min-width: 900px) and(max-width: 1200px) {
      max-width: 450px;
      width: 100%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      max-width: 410px;
      width: 100%;
    }
    @media (min-width: 400px) and (max-width: 600px) {
      max-width: 460px;
      width: 100%;
    }
  }

  & .slick-track {
    display: flex;
    justify-content: space-around;
  } */
  /* & .slick-slide {
    max-width: 361px;
    width: 100%;
  }

  & .slick-track {
    display: flex;
    justify-content: space-around;
  } */
  /* & .slick-track {
    display: flex;
    justify-content: space-around;
  } */
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  /* max-width: 90%; */
  /* width: 100%; */
  /* margin-inline-start: 28px; */
  margin-bottom: 10% !important;
  background: #fff;

  margin-inline-start: 28px;
  margin-inline-end: 28px;
  &:first-of-type {
    /* margin-inline-start: 0; */
  }

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    margin: auto;
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

export const slideMain = styled.div`
  /* margin-inline-start: 5%; */
  margin-inline-start: 5%;
  &:last-of-type {
    margin-inline-end: 5%;
  }

  &:first-child {
    margin-inline-start: 0px;
  }

  & .slick-dots {
    & li {
      width: 13px;
      height: 13px;
      background: white;
      border-radius: 50%;
      /* opacity: 0.05; */
      &.slick-active {
        /* opacity: 1 !important; */
        background-color: black;

        & button:before {
          color: black;
        }
      }
      & div {
        /* position: absolute;
        margin: auto;
        bottom: 5px;
        z-index: 5; */
      }

      & button:before {
        color: white;
      }
    }
  }
`;
