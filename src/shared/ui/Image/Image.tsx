import cl from "./Image.module.css";

interface ImageProps {
  image: string;
}

const Image = ({ image }: ImageProps) => {
  return (
    <div className={cl.wrapper}>
      {image ? <img className={cl.image} src={image} alt="news" /> : null}
    </div>
  );
};

export default Image;
