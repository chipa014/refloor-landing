import { useState, useEffect } from "react";

import Icon from "./Icon";

import styles from "./ScrollUpButton.module.scss";

const ScrollUpButton = function () {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 90) {
        setIsActive(true);
        return;
      }
      setIsActive(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <figure
        className={`${styles["scroll-up"]} ${isActive ? styles.active : ""}`}
      >
        <a href="#" className={styles.link}>
          <Icon iconName="arrow-up2" className={styles.icon} />
        </a>
      </figure>
    </div>
  );
};

export default ScrollUpButton;
