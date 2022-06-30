// import styled from "styled-components";

// export const DetailsMain = styled.div``;

// export const BlogContainer = styled.div`
//   background-color: #f8f8f8;
//   min-height: 100vh;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding-bottom: 29px;
//   width: 100%;

//   & .box {
//     width: 90%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border-radius: 10px;
//     margin-top: 27px;
//     min-height: 90vh;

//     & .container {
//       width: 100%;
//     }

//     & h1 {
//       font-size: 22px;
//       margin-top: 10px;
//       width: 100%;
//       margin-bottom: 22px;

//       @media (max-width: 500px) {
//         font-size: 20px;
//       }
//     }
//   }

//   @media (max-width: 400px) {
//     background-color: #ffffff;
//   }
// `;

// export const Main = styled.div`
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   & .box-virtual {
//     max-width: 1170px;
//     width: 100%;
//   }
//   & .right {
//     max-width: 110px;
//     width: 100%;
//   }
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f8f8f8;
  padding-top: 31px;
  padding-bottom: 46px;
  width: 100%;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }

  & a {
    color: #000;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: 58%;
  margin-inline-start: -5%;
  min-height: 287px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 42px;
  margin-bottom: 15px;
  padding-top: 29px;
  padding-bottom: 20px;

  @media (max-width: 700px) {
    width: 90%;
    margin: auto;
    margin-top: 5%;
  }

  @media (min-width: 699px) and (max-width: 960px) {
    width: 48%;
  }
  & h6 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
  }
  & h3 {
    font-size: 22px;
    margin: 12px 0 23px;
    color: #000000;
    font-weight: normal;
  }
  & p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  & .container {
    display: flex;
    justify-content: space-around;
    max-width: 215px;
    width: 100%;
    border-radius: 10px;
    height: 78px;
    margin-top: 8px;
    & div {
      display: flex;
      align-items: center;
      & span {
        font-size: 18px;
        margin-inline-start: 14.5px;
      }
      &:last-of-type {
        margin-inline-start: 42px;
      }
    }

    & img {
      cursor: pointer;
    }
  }

  & .comments {
    display: flex;
    flex-direction: column;
    padding-bottom: 39px;
    margin-top: 20px;

    & .number-comments {
      font-size: 22px;
      position: relative;
      font-weight: normal;
      &::after {
        content: "";
        max-width: 676px;
        width: 100%;
        height: 1px;
        background: #e8e8e8;
        border-radius: 25px;
        position: absolute;
        bottom: -15px;
        left: 0;
      }
    }

    .add-comment {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 39px;
      margin-top: 20px;

      @media (max-width: 1000px) {
        flex-direction: column;
      }
      & .box-comment {
        display: flex;
        width: 70%;
        align-items: center;
        justify-content: center;

        @media (max-width: 1000px) {
          width: 100%;
        }
      }

      & input {
        max-width: 461px;
        width: 100%;
        min-height: 50px;
        height: 100%;
        border: 1px solid #e6e6e6;
        border-radius: 25px;
        padding-inline-start: 4%;
        overflow: scroll;
        padding-inline-end: 3%;
        word-wrap: break-word;
        word-break: break-all;
        hyphens: auto;

        &:placeholder-shown {
          padding-inline-start: 25px;
          text-transform: capitalize;
        }

        @media (max-width: 1000px) {
          width: 80%;
        }
      }

      & button {
        max-width: 149px;
        @media (max-width: 1000px) {
          margin-top: 4%;
        }
      }

      & .comment-user {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        margin-inline-end: 10px;
      }
    }
  }
`;

export const CardForum = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  border-radius: 10px;
  min-height: 549px;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 5%);
  z-index: 4;
  padding-bottom: 20px;
  min-width: 367px;
  @media (max-width: 800px) {
    width: 90%;
    max-height: auto !important;
    height: auto;
    margin-inline-end: 0;
  }

  @media (min-width: 950px) and (max-width: 1050px) {
    min-width: 200px;
  }

  &:last-child {
    padding-bottom: 34.5px;
  }

  & h3 {
    font-size: 22px;
    color: #2d98da;
    text-transform: capitalize;
    margin-top: 33px;
    margin-inline-end: 0;
    margin-bottom: 30.5px;
    margin-inline-start: 22px;
    align-self: flex-start;
  }

  & .boxCard {
    height: 135px;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    padding: 21px;
    margin-bottom: 7px;
    width: 90%;
    & div:first-of-type {
      display: flex;
      align-items: center;
      margin-inline-end: 13px;
    }

    & .box-like {
      color: #000000;
      margin-top: 11px;
    }
    & p {
      font-size: 16px;
      max-width: 290px;
      height: 58px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & img {
      width: 23px;
    }
    & span {
      font-size: 18px;
      margin-inline-start: 14.6px;
    }

    & div {
      display: flex;
      align-items: center;
    }
  }
  & .card-box {
    max-width: 100%;
    width: 100%;
  }
`;

export const CommentsWrapper = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 20px;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .box-virtual {
    max-width: 830px;
    width: 100%;
    @media (max-width: 1200px) {
      max-width: 700px;
    }
  }

  & .load-comment {
    max-width: 139px;
    width: 100%;
    height: 45px;
    align-self: center;
    border-radius: 2px;
    border: navajowhite;
    color: #5abbf8;
    background: white;
    margin-top: 10px;
  }

  & .nav-container {
    justify-content: space-between;
  }
`;

export const LinkContainer = styled(Link)`
  width: 100%;
`;
