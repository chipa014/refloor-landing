import Logo from "./Logo";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar";

import styles from "./Header.module.scss";

const Header = function () {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <SearchBar />
    </header>
  );
};

export default Header;
