import NewItems from "./NewItems";
import SectionHeader from "../UI/SectionHeader";

import styles from "./SectionNew.module.scss";

const NEW_ITEMS = [
  {
    src: "new-1.png",
    title: "ПВХ плитка Refloor Home Tile DTE 8905",
    color: "Дуб Карибская Ночь",
  },
  {
    src: "new-2.jpg",
    title: "ПВХ плитка Refloor Home Tile DTE 8904",
    color: "Дуб Утренний Марсель",
  },
  {
    src: "new-3.jpg",
    title: "ПВХ плитка Refloor Home Tile DTE 8903",
    color: "Дуб Сафари",
  },
  {
    src: "new-4.jpg",
    title: "ПВХ плитка Refloor Home Tile DTE 8901",
    color: "Дуб Серебряный",
  },
];

const SectionNew = function () {
  return (
    <section className={styles["section-new"]}>
      <SectionHeader>Новинки</SectionHeader>
      <NewItems items={NEW_ITEMS} />
    </section>
  );
};

export default SectionNew;
