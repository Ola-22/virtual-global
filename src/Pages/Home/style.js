import styled from "styled-components";

export const headerContainer = styled.div`
  width: 100%;

  & .box-virtual {
    max-width: 1000px;
    width: 100%;
  }

  & .right {
    @media (min-width: 600px) and (max-width: 900px) {
      margin-inline-end: 70px;
    }
  }

  & .nav-container {
    width: 91%;
    margin: auto;
    justify-content: space-between;
    @media (max-width: 600px) {
      width: 90%;
      margin: auto;
    }
  }
`;

export const HomeContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(241, 242, 245, 0.9),
      rgba(241, 242, 245, 0.9)
    ),
    url(./images/background.png);
  background-size: contain;
  background-repeat: round;
`;

export const NewsBar = styled.div`
  border-top: 1px solid #2d98da;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 50px;
  cursor: pointer;

  & .news-wrapper {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    height: 100%;
    width: 100%;
  }
  & div {
    display: flex;
    /* flex: 10; */
    height: 100%;
    align-items: center;
    justify-content: space-between;

    & h2 {
      font-size: 12px;
    }
    & svg {
      cursor: pointer;
      z-index: 2;
      fill: black;
    }
  }

  .movetxtRtl {
    position: relative;
    animation: movingRtl 20s infinite;
    white-space: nowrap;
    color: black;
    font-size: 14px;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  @keyframes movingRtl {
    from {
      right: 0px;
    }
    to {
      right: 200px;
    }
  }

  .movetxt {
    position: relative;
    animation: moving 20s infinite;
    white-space: nowrap;
    font-size: 14px;
    color: black;
    flex: 12;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  @keyframes moving {
    from {
      left: 0px;
    }
    to {
      left: 200px;
    }
  }
`;

export const TitleNew = styled.span`
  flex: 2;
  color: #fff;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0 20px;
`;
