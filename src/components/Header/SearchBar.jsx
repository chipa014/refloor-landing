import Icon from "../UI/Icon";

import styles from "./SearchBar.module.scss";

const SearchBar = function () {
  return (
    <form action="#" className={styles.search}>
      <input placeholder="Поиск по сайту" className={styles.input} />
      <button className={styles.btn}>
        <Icon iconName="magnifying-glass" className={styles.icon}></Icon>
      </button>
    </form>
  );
};

export default SearchBar;
