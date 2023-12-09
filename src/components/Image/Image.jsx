import cl from "./Image.module.css";

const Image = ({ image }) => {
  return (
    <div className={cl.wrapper}>
      {image ? <img className={cl.image} src={image} alt="news" /> : null}
    </div>
  );
};

export default Image;
