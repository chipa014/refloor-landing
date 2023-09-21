import SliderNavDot from "./SliderNavDot";

import styles from "./SliderNavigation.module.scss";

const SliderNavigation = function (props) {
  const { slides, currentSlideNumber } = props;
  return (
    <div className={styles.nav}>
      {slides.map((slide, slideIndex) => (
        <SliderNavDot
          key={slideIndex}
          active={slideIndex === currentSlideNumber}
          onClick={() => {
            props.onSetSlide(slideIndex);
          }}
        />
      ))}
    </div>
  );
};

export default SliderNavigation;
