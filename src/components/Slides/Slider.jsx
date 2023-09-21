import { useEffect, useRef, useState } from "react";

import AllSlides from "./AllSlides";
import SliderNavigation from "./SliderNavigation/SliderNavigation";
import SliderButton from "./SliderNavigation/SliderButton";

import styles from "./Slider.module.scss";

const AUTO_SLIDE = 5000; //ms
const ANIMATION_TIME = 500; //ms

const Slider = function (props) {
  const { slides } = props;
  const slidesTotal = slides.length;

  const [offset, setOffset] = useState(0);
  const [animationOn, setAnimationOn] = useState(true);
  const timerRef = useRef(null);

  let currentSlide = offset;
  if (currentSlide < 0) {
    currentSlide = slidesTotal - 1;
  }
  if (currentSlide >= slidesTotal) {
    currentSlide = 0;
  }

  const slideLeftHandler = function () {
    setAnimationOn(true);
    setOffset((prevOffset) => {
      return prevOffset - 1;
    });
  };

  const slideRightHandler = function () {
    setAnimationOn(true);
    setOffset((prevOffset) => {
      return prevOffset + 1;
    });
  };

  const setSlideHandler = function (newSlide) {
    setOffset(newSlide);
  };

  //Auto-slide
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      slideRightHandler();
    }, AUTO_SLIDE);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [offset, timerRef, slideRightHandler, AUTO_SLIDE]);

  //Infinite scroll
  useEffect(() => {
    const setTimer = function (newOffset) {
      const timer = setTimeout(() => {
        setAnimationOn(false);
        setOffset(newOffset);
      }, ANIMATION_TIME);
      return () => {
        clearTimeout(timer);
      };
    };

    if (offset < 0) {
      return setTimer(slidesTotal - 1);
    }
    if (offset >= slidesTotal) {
      return setTimer(0);
    }
  }, [offset, setOffset, slidesTotal]);

  return (
    <div className={styles["main-container"]}>
      <AllSlides
        slides={slides}
        offset={offset}
        animationOn={animationOn}
        animationTime={ANIMATION_TIME}
      />
      <SliderButton
        iconName="chevron-thin-left"
        onClick={slideLeftHandler}
        className={`${styles.btn} ${styles["btn-left"]}`}
      />
      <SliderButton
        iconName="chevron-thin-right"
        onClick={slideRightHandler}
        className={`${styles.btn} ${styles["btn-right"]}`}
      />
      <SliderNavigation
        onSetSlide={setSlideHandler}
        slides={props.slides}
        currentSlide={currentSlide}
      />
    </div>
  );
};

export default Slider;
