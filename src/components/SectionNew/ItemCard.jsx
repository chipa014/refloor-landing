import Button from "../UI/Button";

import styles from "./ItemCard.module.scss";

const ItemCard = function (props) {
  const { itemData } = props;
  return (
    <div className={styles.card}>
      <a href="#" className={styles["img-container"]}>
        <img
          src={`/src/assets/img/${itemData.src}`}
          alt={`${itemData.title} ${itemData.color}`}
          className={styles.img}
        />
        <figure className={styles["icon-new"]}>
          <span className={styles["icon-new--text"]}>New</span>
        </figure>
      </a>
      <a href="#" className={styles.title}>
        {itemData.title}
      </a>
      <a href="#" className={styles.color}>
        {itemData.color}
      </a>
      <Button className={styles.btn}>Подробнее</Button>
    </div>
  );
};

export default ItemCard;
