import Image from "../../assets/img/logo.jpg";

import styles from "./Logo.module.scss";

const Logo = function () {
  return (
    <a href="#" className={styles.container}>
      <img src={Image} alt="Домашняя страница" className={styles.logo} />
    </a>
  );
};

export default Logo;
