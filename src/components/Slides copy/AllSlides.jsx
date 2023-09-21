import Slide from "./Slide";

import styles from "./AllSlides.module.scss";

const AllSlides = function (props) {
  const containerStyles = {
    width: `${(props.slides.length + 2) * 100}vw`,
    transform: `translateX(-${props.translateX * 100}vw)`,
    transition: `all ${props.animation ? "0.5" : "0"}s`,
  };

  const firstSlide = props.slides[0];
  const lastSlide = props.slides[props.slides.length - 1];

  return (
    <ul className={styles.container} style={containerStyles}>
      <Slide slide={lastSlide} key="left border" />
      {props.slides.map((slide) => (
        <Slide slide={slide} key={slide.image} />
      ))}
      <Slide slide={firstSlide} key="right border" />
    </ul>
  );
};

export default AllSlides;
