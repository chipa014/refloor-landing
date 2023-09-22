import Feature from "./Feature";

import styles from "./Features.module.scss";

const Features = function (props) {
  return (
    <div className={styles.container}>
      {props.features.map((feature) => (
        <Feature feature={feature} key={feature.iconName} />
      ))}
    </div>
  );
};

export default Features;
