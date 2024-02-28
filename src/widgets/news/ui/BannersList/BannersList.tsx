import { INews, NewsBanner } from '@/entities/news';
import { withSkeleton } from '@/shared';

import cl from './BannersList.module.css';

interface BannersListProps {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: BannersListProps) => {
  return (
    <ul className={cl.banners} role="list">
      {banners?.map((banner) => (
        <li key={banner.id}>
          <NewsBanner newsItem={banner} />
        </li>
      ))}
    </ul>
  );
};

export default withSkeleton<BannersListProps>(BannersList, 'banner', 10, 'column');
