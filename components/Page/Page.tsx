import { Meta, Header, Main, Footer } from "components";
import styles from "./Page.module.css";

interface PageProps {
  children: React.ReactNode;
  title?: string;
}

export const Page = ({ children, title = "Christian Kirkeby" }: PageProps) => {
  return (
    <div className={styles.page}>
      <Meta title={title} />
      <Header />
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
};
