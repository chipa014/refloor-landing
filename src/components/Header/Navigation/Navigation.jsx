import NavItem from "./NavItem";

import styles from "./Navigation.module.scss";

const Navigation = function () {
  const navItems = ["Каталог", "О компании", "Контакты"];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((navItem) => (
          <NavItem key={navItem}>{navItem}</NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
