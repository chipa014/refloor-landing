import SliderNavDot from "./SliderNavDot";

import styles from "./SliderNavigation.module.scss";

const SliderNavigation = function (props) {
  const { slides, currentSlide } = props;
  return (
    <div className={styles.nav}>
      {slides.map((slide, slideIndex) => (
        <SliderNavDot
          key={slideIndex}
          active={slideIndex === currentSlide}
          onClick={() => {
            props.onSetSlide(slideIndex);
          }}
        />
      ))}
    </div>
  );
};

export default SliderNavigation;
