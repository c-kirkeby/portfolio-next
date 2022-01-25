import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made using <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://www.nextjs.org/">Next.js</a>.
      </p>
    </footer>
  );
};
