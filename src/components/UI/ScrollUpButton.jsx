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

  const scrollToTopHandler = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={scrollToTopHandler}
        className={`${styles.button} ${isActive ? styles.active : ""}`}
      >
        <Icon iconName="arrow-up2" className={styles.icon} />
      </button>
    </div>
  );
};

export default ScrollUpButton;
