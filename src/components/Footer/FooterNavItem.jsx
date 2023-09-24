import styles from "./FooterNavItem.module.scss";

const FooterNavItem = function (props) {
  const { item } = props;
  return (
    <a href={item.href} className={styles["nav-item"]}>
      {item.text}
    </a>
  );
};

export default FooterNavItem;
