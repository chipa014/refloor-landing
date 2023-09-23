import Icon from "../UI/Icon";

import styles from "./CompanyLink.module.scss";

const CompanyLink = function (props) {
  return (
    <a href={props.href} className={styles.link}>
      <figure className={styles["icon-container"]}>
        <Icon iconName={props.iconName} className={styles.icon} />
      </figure>
      {props.children}
    </a>
  );
};

export default CompanyLink;
