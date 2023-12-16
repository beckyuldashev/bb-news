import NewsBanner from "../NewsBanner/NewsBanner";

import withSkeleton from "../../helpers/HOC/withSkeleton";

import cl from "./BannersList.module.css";

const BannersList = ({ banners }) => {
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

export default withSkeleton(BannersList, "banner", 10, "column");
