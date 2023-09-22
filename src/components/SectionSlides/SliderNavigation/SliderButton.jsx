import Icon from "../../UI/Icon";
import styles from "./SliderButton.module.scss";

const SliderButton = function (props) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${styles.btn}`}
    >
      <Icon iconName={props.iconName} className={styles.icon} />
    </button>
  );
};

export default SliderButton;
