import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/HOC/withSkeleton";
import { INews } from "../../interfaces";

import cl from "./NewsList.module.css";

interface NewsListProps {
  news?: INews[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={cl.list} role="list">
      {news?.map((item) => (
        <li key={item.id} className={cl.item}>
          <NewsItem newsItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default withSkeleton<NewsListProps>(NewsList, "item", 6, "row");
