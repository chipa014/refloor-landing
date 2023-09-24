import CompanyLink from "./CompanyLink";

import styles from "./SectionCompany.module.scss";

const SectionCompany = function () {
  return (
    <section className={styles["section-company"]}>
      <img
        src="/assets/img/company.jpg"
        alt="Счастливая семья лежит на полу"
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>О компании</h2>
        <p className={styles.text}>
          Принципы нашей компании - это открытость, осознанность и
          ответственность. Продукты, представленные нашей компанией, отвечают
          самым высоким стандартам качества. Для формирования коллекций
          привлекаются передовые дизайнеры России.
        </p>
        <CompanyLink href="#" iconName="chevron-small-right">
          Подробнее
        </CompanyLink>
      </div>
    </section>
  );
};

export default SectionCompany;
