import GalleryItem from "./GalleryItem";

import styles from "./Gallery.module.scss";

const Gallery = function (props) {
  return (
    <div className={styles.container}>
      {props.images.map((image, imageIndex) => (
        <GalleryItem
          image={image}
          key={image.url}
          className={styles[`item-${imageIndex + 1}`]}
          isFirst={imageIndex === 0}
        />
      ))}
    </div>
  );
};

export default Gallery;
