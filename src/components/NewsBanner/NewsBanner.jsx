import Image from "../Image/Image";

import { formatTimeAgo } from "../../helpers/date/formatTimeAgo";

import cl from "./NewsBanner.module.css";

const NewsBanner = ({ newsItem }) => {
  return (
    <div className={cl.banner}>
      <Image image={newsItem?.image} />
      <div className={cl.info}>
        <h3 className={cl.title}>{newsItem?.title}</h3>
        <p className={cl.extra}>
          {formatTimeAgo(newsItem?.published)} by {newsItem?.author}
        </p>
      </div>
    </div>
  );
};

export default NewsBanner;
