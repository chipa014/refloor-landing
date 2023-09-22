import Slider from "./Slider";

import styles from "./SectionSlides.module.scss";

const SLIDES = [
  {
    image: "slide-1.jpg",
    title: "Refloor в России",
    paragraph:
      "ПВХ плитка Refloor — это инновационный продукт, состоящий из винила и большого количества наполнителя из измельчённой горной породы.",
    btnText: "Сделано в Южной Корее",
  },
  {
    image: "slide-2.jpg",
    title: "Нравится всем!",
    paragraph:
      "Сегодня многие покупатели останавливают свой выбор на ПВХ плитке, по достоинству оценив уникальные и многочисленные преимущества этого материала",
    btnText: "Перейти в каталог",
  },
  {
    image: "slide-3.jpg",
    title: "Практичное решение",
    paragraph:
      "За ПВХ плиткой просто ухаживать! Пролили воду, краски, даже зелёнку — это легко убрать",
    btnText: "Подробнее о плитке",
  },
  {
    image: "slide-4.jpg",
    title: "Для дома и офиса",
    paragraph:
      "В отличие от ламината или паркетной доски, ПВХ плитка Refloor обладает 100% влагостойкостью и высоким уровнем пожаробезопасности",
    btnText: "Подробнее о плитке",
  },
];

const Slides = function () {
  return (
    <section className={styles["section-slides"]}>
      <Slider slides={SLIDES} />
    </section>
  );
};

export default Slides;
