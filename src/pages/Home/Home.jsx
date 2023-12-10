import { useState, useEffect } from "react";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

import { getNews } from "../../api/apiNews";

import cl from "./Home.module.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const data = await getNews();
      setNews(data.news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={cl.home}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner newsItem={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      {news.length > 0 && !isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={6} type="item" />
      )}
    </div>
  );
};

export default Home;
