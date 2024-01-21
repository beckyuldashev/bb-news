import BannersList from '../BannersList/BannersList';

import { useGetLatestNewsQuery } from '../../store/services/newsApi';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
