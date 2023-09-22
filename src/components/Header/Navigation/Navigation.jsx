import NavItem from "./NavItem";

import styles from "./Navigation.module.scss";

const Navigation = function () {
  const navItems = [
    { title: "Каталог", dropdownItems: [] },
    { title: "О компании", dropdownItems: ["О компании", "Реквизиты"] },
    { title: "Помощь", dropdownItems: ["Укладка", "Гарантия", "Вопрос-ответ"] },
    { title: "Контакты", dropdownItems: [] },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((navItem) => (
          <NavItem key={navItem.title} itemData={navItem} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
