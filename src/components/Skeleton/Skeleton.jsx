import cl from "./Skeleton.module.css";

const Skeleton = ({ count = 1, type = "banner" }) => {
  return count > 1 ? (
    <ul role="list">
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
