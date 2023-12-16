import BannersList from "../BannersList/BannersList";

const LatestNews = ({ banners, isNewsLoading }) => {
  return (
    <section>
      <BannersList banners={banners} isLoading={isNewsLoading} />
    </section>
  );
};

export default LatestNews;
