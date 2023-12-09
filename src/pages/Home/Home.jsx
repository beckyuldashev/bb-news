import { useState, useEffect } from "react";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";

import { getNews } from "../../api/apiNews";

import cl from "./Home.module.css";

const Home = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const data = await getNews();
      setNews(data.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={cl.home}>
      {news.length > 0 ? <NewsBanner newsItem={news[0]} /> : "Loading..."}
      {news.length > 0 ? <NewsList news={news} /> : "Loading..."}
    </div>
  );
};

export default Home;
