import Button from "../UI/Button";

import styles from "./Slide.module.scss";

const Slide = function (props) {
  const { slide } = props;
  const imageStyles = {
    backgroundImage: `linear-gradient(to right, #0009, #0009), url(/src/assets/img/${slide.image})`,
    // backgroundImage: `url(/src/assets/img/${slide.image})`,
  };
  return (
    <div
      className={styles["image-container"]}
      style={imageStyles}
      key={slide.image}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{slide.title}</h1>
        <p className={styles.paragraph}>{slide.paragraph}</p>
        <Button>{slide.btnText}</Button>
      </div>
    </div>
  );
};

export default Slide;
