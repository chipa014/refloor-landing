import Slide from "./Slide";

import styles from "./AllSlides.module.scss";

const AllSlides = function (props) {
  const { offset, slides, animationOn, animationTime } = props;
  const containerStyles = {
    width: `${(props.slides.length + 2) * 100}vw`,
    transform: `translateX(-${(offset + 1) * 100}vw)`,
    transition: `all ${animationOn ? animationTime : 0}ms`,
  };

  const firstSlide = slides[0];
  const lastSlide = slides[slides.length - 1];

  return (
    <div className={styles.container} style={containerStyles}>
      <Slide slide={lastSlide} key={"left border"} />
      {slides.map((slide) => (
        <Slide slide={slide} key={slide.image} />
      ))}
      <Slide slide={firstSlide} key={"right border"} />
    </div>
  );
};

export default AllSlides;
