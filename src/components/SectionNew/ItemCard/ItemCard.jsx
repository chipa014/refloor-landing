import Button from "../../UI/Button";
import Icon from "../../UI/Icon";
import IconButton from "./IconButton";
import IconNew from "./IconNew";

import styles from "./ItemCard.module.scss";

const ItemCard = function (props) {
  const { itemData } = props;
  return (
    <div className={styles.card}>
      <div href="#" className={styles["img-container"]}>
        <a href="#" className={styles["img-link"]}>
          <img
            src={`/src/assets/img/${itemData.src}`}
            alt={`${itemData.title} ${itemData.color}`}
            className={styles.img}
          />
        </a>
        <IconNew />
        <div className={styles["icons-container"]}>
          <IconButton iconName="heart" />
          <IconButton iconName="bar-graph" />
        </div>
      </div>
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
