import styles from "./SectionHeader.module.scss";

const SectionHeader = function (props) {
  return <h1 className={styles["section-header"]}>{props.children}</h1>;
};

export default SectionHeader;
