import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import Pagination from "../../Components/Pagination";
import Accordian from "./Accordian";

function Faqs({ settingsData, profileInformation }) {
  const [faqs, setFaqs] = useState();
  useEffect(() => {
    axiosInstance
      .get("/api/web-site/faqs", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setFaqs(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const lengthFaqs = faqs?.faqs;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = lengthFaqs?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <S.Main>
      <Nav
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.FaqsContainer>
        <Accordian lengthFaqs={currentPosts} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={lengthFaqs?.length}
          paginate={paginate}
        />
      </S.FaqsContainer>
    </S.Main>
  );
}

export default Faqs;
