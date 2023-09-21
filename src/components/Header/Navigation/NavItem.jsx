import styles from "./NavItem.module.scss";

const NavItem = function (props) {
  return (
    <a href="#" className={styles["nav-item"]}>
      {props.children}
    </a>
  );
};

export default NavItem;
