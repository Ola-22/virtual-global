import React, { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";
import * as S from "../../Pages/Blog/PaginationStyle";
import Accordian from "../../Pages/Faqs/Accordian";

function PaginationComponent({ language, rtlLang }) {
  const [data, setData] = useState([]);

  const [totalPages, setTotalPages] = useState();
  const [currentPage, setcurrentPage] = useState(1);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages?.map((number) => {
    if (number <= totalPages) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    axiosInstance
      .get(`/api/web-site/faqs?page_number=${currentPage}`, {
        headers: {
          lang: language,
        },
      })
      .then((res) => {
        setData(res.data.items.faqs);
        setTotalPages(res.data.items.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language, currentPage]);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <>
      {<Accordian data={data} language={language} rtlLang={rtlLang} />}
      <S.PageNumber>
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </S.PageNumber>
    </>
  );
}

export default PaginationComponent;
