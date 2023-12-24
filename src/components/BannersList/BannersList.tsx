import NewsBanner from "../NewsBanner/NewsBanner";

import withSkeleton from "../../helpers/HOC/withSkeleton";

import cl from "./BannersList.module.css";
import { INews } from "../../interfaces";

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

export default withSkeleton<BannersListProps>(
  BannersList,
  "banner",
  10,
  "column"
);
