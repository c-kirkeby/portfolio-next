import Meta from "./Meta";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "components/Page.module.css";

interface PageProps {
  children: React.ReactNode;
  title?: string;
}

const Page = ({ children, title = "Christian Kirkeby" }: PageProps) => {
  return (
    <div className={styles.page}>
      <Meta title={title} />
      <Header />
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
};
export default Page;
