import { useState, useEffect } from "react";

import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import { getCategories, getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";

import cl from "./Home.module.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const { debouncedValue } = useDebounce(keywords, 1000);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const data = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "all" ? null : selectedCategory,
        keywords: debouncedValue,
      });
      setNews(data.news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setIsCategoriesLoading(true);
      const data = await getCategories();
      setCategories(["all", ...data.categories]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsCategoriesLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCategory, debouncedValue]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={cl.home}>
      {!isCategoriesLoading ? (
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isLoading={isLoading}
        />
      ) : (
        <Skeleton count={1} type="item" />
      )}

      <Search keywords={keywords} setKeywords={setKeywords} />

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
