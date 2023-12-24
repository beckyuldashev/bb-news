import { formatTimeAgo } from "../../helpers/date/formatTimeAgo";
import { INews } from "../../interfaces";

import cl from "./NewsItem.module.css";

interface NewsItemProps {
  newsItem: INews;
}

const NewsItem = ({ newsItem }: NewsItemProps) => {
  return (
    <div className={cl.item}>
      <div
        className={cl.image}
        style={{ backgroundImage: `url(${newsItem.image})` }}
      ></div>
      <div className={cl.info}>
        <h3 className={cl.title}>{newsItem.title}</h3>
        <p className={cl.extra}>
          {formatTimeAgo(newsItem.published)} by {newsItem.author}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
