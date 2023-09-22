import Dropdown from "./Dropdown";

import styles from "./NavItem.module.scss";

const NavItem = function (props) {
  const { itemData } = props;
  return (
    <li className={styles["nav-item"]}>
      <a href="#" className={styles.link}>
        {itemData.title}
      </a>
      {itemData.dropdownItems.length > 0 && (
        <Dropdown items={itemData.dropdownItems} className={styles.dropdown} />
      )}
    </li>
  );
};

export default NavItem;
