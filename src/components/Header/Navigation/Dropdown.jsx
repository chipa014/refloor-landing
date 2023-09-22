import styles from "./Dropdown.module.scss";

const Dropdown = function (props) {
  return (
    <ul className={`${styles.dropdown} ${props.className}`}>
      {props.items.map((item) => (
        <li className={styles.item} key={item}>
          <a href="#" className={styles.link}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
