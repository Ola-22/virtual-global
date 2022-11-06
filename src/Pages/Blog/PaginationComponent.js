import React, { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";
import * as S from "./PaginationStyle";
import RenderData from "./RenderData";

function PaginationComponent({
  language,
  settingsData,
  postsSearch,
  searchQuery,
  rtlLang,
}) {
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
      .get(`/api/posts/all?page_number=${currentPage}`, {
        headers: {
          lang: language,
        },
      })
      .then((response) => {
        setData(response.data.items.posts);
        setTotalPages(response.data.items.total_pages);
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
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <>
      <S.paginationContainer>
        {
          <RenderData
            data={data}
            language={language}
            settingsData={settingsData}
            postsSearch={postsSearch}
            searchQuery={searchQuery}
            rtlLang={rtlLang}
          />
        }

        {!searchQuery && (
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
                disabled={
                  currentPage === pages[pages?.length - 1] ? true : false
                }
              >
                Next
              </button>
            </li>
          </S.PageNumber>
        )}
      </S.paginationContainer>
    </>
  );
}

export default PaginationComponent;
