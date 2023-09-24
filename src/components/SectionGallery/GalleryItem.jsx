import styles from "./GalleryItem.module.scss";

const GalleryItem = function (props) {
  const { image, isFirst } = props;
  return (
    <a href="#" key={image.url} className={`${styles.item} ${props.className}`}>
      <img
        src={`/assets/img/${image.url}`}
        alt={image.title}
        className={styles.image}
      />
      <h2 className={styles.popup}>{image.title}</h2>
      {isFirst && (
        <div className={styles.price}>
          <h3 className={styles["price--title"]}>Идеальный пол</h3>
          <h4 className={styles["price--subtitle"]}>от 1090 руб./кв.м</h4>
        </div>
      )}
    </a>
  );
};

export default GalleryItem;
