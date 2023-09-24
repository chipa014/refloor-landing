import styles from "./Logo.module.scss";

const Logo = function () {
  return (
    <a href="#" className={styles.container}>
      <img
        src="/assets/img/logo.jpg"
        alt="Домашняя страница"
        className={styles.logo}
      />
    </a>
  );
};

export default Logo;
