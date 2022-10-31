import Link from "next/link";
import { Logo } from "components";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link passHref href="/" className={styles["nav-link"]}>
          <Logo />
        </Link>
        <div className={styles.spacer}></div>
        <div className={styles.links}>
          <Link href="/blog" className={styles["nav-link"]}>
            Blog
          </Link>
          <Link href="/portfolio" className={styles["nav-link"]}>
            Portfolio
          </Link>
          <Link href="/contact" className={styles["nav-link"]}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};
