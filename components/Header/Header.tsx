import Link from "next/link";
import styles from "./Header.module.scss";
import { Logo } from "components";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link passHref href="/">
          <a className={styles[`logo-link`]}>
            <Logo />
          </a>
        </Link>
        <div className={styles.spacer}></div>
        <div className={styles.links}>
          {/* <Link href="/">
              <a className={styles[`nav-link`]}>Home</a>
            </Link> */}
          <Link href="/blog">
            <a className={styles[`nav-link`]}>Blog</a>
          </Link>
          <Link href="/portfolio">
            <a className={styles[`nav-link`]}>Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className={styles[`nav-link`]}>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
