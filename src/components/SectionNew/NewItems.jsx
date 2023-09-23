import ItemCard from "./ItemCard/ItemCard";

import styles from "./NewItems.module.scss";

const NewItems = function (props) {
  const { items } = props;
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ItemCard itemData={item} key={item.src} />
      ))}
    </div>
  );
};

export default NewItems;
