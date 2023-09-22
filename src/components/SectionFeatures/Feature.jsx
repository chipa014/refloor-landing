import Icon from "../UI/Icon";

import styles from "./Feature.module.scss";

const Feature = function (props) {
  const { feature } = props;
  return (
    <a href="#" className={styles.feature}>
      <Icon
        iconName={feature.iconName}
        className={`${styles.icon} ${
          //Little bit of designer magic ;-)
          feature.iconName === "air" && styles["icon-heat"]
        }`}
      />
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.text}>{feature.text}</p>
    </a>
  );
};

export default Feature;
