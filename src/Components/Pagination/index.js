import * as S from "./style";
import { useState } from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <S.paginationContainer className="pagination">
        {pageNumbers.map((number, index) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                setIsActive(index);
                paginate(number);
              }}
              className={isActive === index ? "active" : ""}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
      </S.paginationContainer>
    </>
  );
}

export default Pagination;
