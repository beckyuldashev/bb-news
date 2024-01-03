import Image from "../Image/Image";

import { formatTimeAgo } from "../../helpers/date/formatTimeAgo";

import cl from "./NewsBanner.module.css";
import { INews } from "../../interfaces";

interface NewsBannerProps {
  newsItem: INews;
}

const NewsBanner = ({ newsItem }: NewsBannerProps) => {
  return (
    <div className={`${cl.banner} container`}>
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
