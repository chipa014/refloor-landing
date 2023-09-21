import { useCallback, useEffect, useRef, useState } from "react";

import AllSlides from "./AllSlides";
import SliderButton from "./SliderNavigation/SliderButton";
import SliderNavigation from "./SliderNavigation/SliderNavigation";

import styles from "./Slider.module.scss";

const AUTO_SLIDE = 5000; //ms

const Slider = function (props) {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [translateX, setTranslateX] = useState(1);
  const [animationOn, setAnimationOn] = useState(true);

  const numberOfSlides = props.slides.length;
  console.log(currentSlideNumber);

  const timerRef = useRef(null);

  const slideLeftHandler = function () {
    setAnimationOn(true);
    setCurrentSlideNumber((prevSlideNumber) => {
      let newSlideNumber = prevSlideNumber - 1;
      if (newSlideNumber < 0) {
        newSlideNumber = numberOfSlides - 1;
      }
      return newSlideNumber;
    });
    setTranslateX((prevTranslateX) => {
      return prevTranslateX - 1;
    });
  };

  const slideRightHandler = useCallback(
    function () {
      setAnimationOn(true);
      setCurrentSlideNumber((prevSlideNumber) => {
        let newSlideNumber = prevSlideNumber + 1;
        if (newSlideNumber >= numberOfSlides) {
          newSlideNumber = 0;
        }
        return newSlideNumber;
      });
      setTranslateX((prevTranslateX) => {
        return prevTranslateX + 1;
      });
    },
    [setAnimationOn, setCurrentSlideNumber, setTranslateX]
  );

  const setSlideHandler = function (newSlide) {
    setAnimationOn(true);
    setCurrentSlideNumber(newSlide);
    setTranslateX(newSlide + 1);
  };

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
  }, [currentSlideNumber, timerRef, slideRightHandler]);

  useEffect(() => {
    const transitionEndHandler = function () {
      if (translateX < 1) {
        setAnimationOn(false);
        setTranslateX(numberOfSlides);
      } else if (translateX > numberOfSlides) {
        setAnimationOn(false);
        setTranslateX(1);
      }
    };

    document.addEventListener("transitionend", transitionEndHandler);

    return () => {
      document.removeEventListener("transitionend", transitionEndHandler);
    };
  }, [currentSlideNumber, setAnimationOn, setCurrentSlideNumber]);

  return (
    <div className={styles.slider}>
      <AllSlides
        slides={props.slides}
        translateX={translateX}
        animation={animationOn}
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
        currentSlideNumber={currentSlideNumber}
      />
    </div>
  );
};

export default Slider;
