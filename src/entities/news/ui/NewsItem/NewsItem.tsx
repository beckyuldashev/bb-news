import { INews } from '../..';
import { formatTimeAgo } from '@/shared';

import cl from './NewsItem.module.css';

interface NewsItemProps {
  newsItem: INews;
}

const NewsItem = ({ newsItem }: NewsItemProps) => {
  return (
    <div className={`${cl.item} container`}>
      <div className={cl.image} style={{ backgroundImage: `url(${newsItem.image})` }}></div>
      <div className={`${cl.info} container`}>
        <h3 className={cl.title}>{newsItem.title}</h3>
        <p className={cl.extra}>
          {formatTimeAgo(newsItem.published)} by {newsItem.author}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
