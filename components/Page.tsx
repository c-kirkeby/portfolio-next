import Meta from "./Meta";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import styles from "./Page.module.css";

const Page = ({ children, title }) => {
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
