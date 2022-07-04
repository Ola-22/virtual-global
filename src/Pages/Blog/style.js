import styled from "styled-components";

export const BlogContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 29px;
  width: 100%;

  & .box {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 27px;
    min-height: 90vh;

    & .container {
      width: 100%;
    }

    & h1 {
      font-size: 22px;
      margin-top: 10px;
      width: 100%;
      margin-bottom: 22px;

      @media (max-width: 500px) {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 400px) {
    background-color: #ffffff;
  }
`;

export const Main = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  & .box-virtual {
    max-width: 1170px;
    width: 100%;
  }
  & .right {
    max-width: 110px;
    width: 100%;
  }

  & .pagination-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10 !important;
  }

  & .pagination {
    margin-top: 0;
    margin-bottom: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  & .pagination li.page-item.active a.page-link {
    color: #445565 !important;
    background-color: #e3e7eb !important;
    border-color: #ced4da !important;
  }
  & .pagination a.page-link {
    padding: 0.75rem 1rem;
    min-width: 3.5rem;
    text-align: center;
    box-shadow: none !important;
    border-color: #ced4da !important;
    color: #6b88a4;
    font-weight: 900;
    font-size: 1rem;
  }
  & .pagination a.page-link:hover {
    background-color: #f4f4f4;
  }
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  align-items: center;
  height: 200px;

  & .author {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-inline-end: 10px;
  }

  & h3 {
    font-size: 20px;
    text-transform: capitalize;

    &:hover {
      cursor: pointer;
      color: #2395db;
    }

    @media (max-width: 500px) {
      font-size: 16px !important;
    }
  }

  & .card-header {
    display: flex;
    align-items: center;
    width: 55%;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;

    & div {
      display: flex;
      align-items: center;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    & svg {
      color: rgba(0, 0, 0, 0.4);
      margin-inline-end: 10px;
    }

    & span {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.4);
      text-transform: capitalize;

      @media (max-width: 500px) {
        font-size: 12px;
      }
    }
  }

  & .card-body {
    width: 92%;

    & button {
      max-width: 150px;
      min-height: 40px;
      margin-top: 10px;
    }

    & p {
      height: 40px;
      overflow: hidden;
      max-width: 100%;
      font-size: 16px;
      font-weight: normal;
      @media (max-width: 500px) {
        font-size: 14px !important;
      }
    }
  }

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;
