import NewsItem from "../NewsItem/NewsItem";
import cl from "./NewsList.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={cl.list} role="list">
      {news.map((item) => (
        <li key={item.id} className={cl.item}>
          <NewsItem newsItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
