import styles from "./SliderNavDot.module.scss";

const SliderNavDot = function (props) {
  return (
    <button
      className={`${styles.btn} ${props.active && styles.active}`}
      onClick={props.onClick}
    />
  );
};

export default SliderNavDot;
