import { DirectionType, SkeletonType } from "../../interfaces";
import cl from "./Skeleton.module.css";

interface SkeletonProps {
  count?: number;
  type?: SkeletonType;
  direction?: DirectionType;
}

const Skeleton = ({
  count = 1,
  type = "banner",
  direction = "column",
}: SkeletonProps) => {
  return count > 1 ? (
    <ul
      role="list"
      className={direction === "column" ? cl.colList : cl.rowList}
    >
      {[...Array(count)].map((_, index) => (
        <li
          key={index}
          className={type === "banner" ? cl.banner : cl.item}
        ></li>
      ))}
    </ul>
  ) : (
    <div className={type === "banner" ? cl.banner : cl.item}></div>
  );
};

export default Skeleton;
