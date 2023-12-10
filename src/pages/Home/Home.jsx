import { useState, useEffect } from "react";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

import { getNews } from "../../api/apiNews";

import cl from "./Home.module.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const data = await getNews(currentPage, pageSize);
      setNews(data.news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  return (
    <div className={cl.home}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner newsItem={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />

      {news.length > 0 && !isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={6} type="item" />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Home;
