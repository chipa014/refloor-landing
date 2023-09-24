import FooterNavItem from "./FooterNavItem";

import styles from "./FooterNavigation.module.scss";

const FooterNavigation = function (props) {
  return (
    <nav className={styles.nav}>
      {props.items.map((item) => (
        <FooterNavItem item={item} key={item.text}></FooterNavItem>
      ))}
    </nav>
  );
};

export default FooterNavigation;
