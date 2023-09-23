import ItemCard from "./ItemCard";

import styles from "./NewItems.module.scss";

const NewItems = function (props) {
  const { items } = props;
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ItemCard itemData={item} />
      ))}
    </div>
  );
};

export default NewItems;
