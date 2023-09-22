import Features from "./Features";

import styles from "./SectionFeatures.module.scss";

const FEATURES = [
  {
    title: "Прочность",
    text: "Наше покрытие устойчиво к ударам.",
    iconName: "new",
  },
  {
    title: "Влагостойкость",
    text: "Наше покрытие на 100% не боится воды.",
    iconName: "water",
  },
  {
    title: "Экологичность",
    text: "Мы заботимся о природе и используем экологически чистые материалы",
    iconName: "leaf",
  },
  {
    title: "Универсальность",
    text: "Подходит для полов с подогревом",
    iconName: "air",
  },
  {
    title: "Надёжность",
    text: "Срок службы пола — 25 лет",
    iconName: "shield",
  },
];

const SectionFeatures = function () {
  return (
    <section className={styles["section-features"]}>
      <h1 className={styles.title}>Наши преимущества</h1>
      <Features features={FEATURES} />
    </section>
  );
};

export default SectionFeatures;
