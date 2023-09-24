import FooterNavigation from "./FooterNavigation";

import styles from "./Footer.module.scss";

const FOOTER_NAV_ITEMS = [
  { text: "О компании", href: "#" },
  { text: "Реквизиты", href: "#" },
  { text: "Укладка", href: "#" },
  { text: "Гарантия", href: "#" },
  { text: "Вопрос-ответ", href: "#" },
  { text: "Контакты", href: "#" },
];

const Footer = function () {
  return (
    <footer className={styles.footer}>
      <FooterNavigation items={FOOTER_NAV_ITEMS} />
      <div className={styles.copyright}>
        <p>
          Редизайн лендинга Refloor от{" "}
          <a
            className={styles.link}
            href="https://novosibirsk.hh.ru/resume/51a1b225ff0c58c7a20039ed1f424162626273"
          >
            Александра Трушина
          </a>
          .
        </p>
        <p>&copy; ООО "Рефлор", 2008-2023. Все права защищены.</p>
        <p>
          Обращаем ваше внимание на то, что информация на сайте носит
          информационный характер и не является публичной офертой.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
