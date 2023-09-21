import styles from "./Logo.module.scss";

const Logo = function () {
  return (
    <img
      src={"/src/assets/img/logo.jpg"}
      alt="Домашняя страница"
      className={styles.logo}
    />
  );
};

export default Logo;
