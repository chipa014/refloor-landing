import { useState } from "react";

import Icon from "../../UI/Icon";
import styles from "./IconButton.module.scss";

const IconButton = function (props) {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveHandler = function () {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <button
      onClick={toggleActiveHandler}
      className={`${styles["icon-button"]} ${
        isActive
          ? styles["icon-button--active"]
          : styles["icon-button--inactive"]
      }`}
    >
      <Icon className={styles.icon} iconName={props.iconName} />
    </button>
  );
};

export default IconButton;
