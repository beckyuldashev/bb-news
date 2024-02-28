import { INews, NewsItem } from '@/entities/news';
import { withSkeleton } from '@/shared';

import cl from './NewsList.module.css';

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

export default withSkeleton<NewsListProps>(NewsList, 'item', 6, 'row');
