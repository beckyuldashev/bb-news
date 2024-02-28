import { BannersList } from '@/widgets/news/ui';
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
