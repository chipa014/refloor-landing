import Button from "../UI/Button";
import Gallery from "./Gallery";

import styles from "./SectionGallery.module.scss";

const GALLERY_IMAGES = [
  { url: "gallery-1.png", title: "Идеальный пол" },
  { url: "gallery-2.png", title: "В кухню" },
  { url: "gallery-3.png", title: "Для детской" },
  { url: "gallery-4.png", title: "Приятный на ощупь" },
  { url: "gallery-5.png", title: "Практичное покрытие" },
  { url: "gallery-6.png", title: "Не боится воды" },
];

const SectionGallery = function () {
  return (
    <section className={styles["section-gallery"]}>
      <Gallery images={GALLERY_IMAGES} />
      <Button>Перейти в каталог</Button>
    </section>
  );
};

export default SectionGallery;
