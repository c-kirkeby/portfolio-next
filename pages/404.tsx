import React from "react";
import Link from "next/link";
import styles from "../styles/404.module.css";
import Page from "../components/Page";

const NotFoundPage = () => {
  return (
    <Page title={`Page Not Found`}>
      <div className={styles.container}>
        <div className={styles[`outer-box`]}>
          <div className={styles[`inner-box`]}>
            <div className={styles[`not-found-content`]}>
              <h1 className={styles[`not-found-title`]}>
                Page not found (404)
              </h1>
              <p className={styles[`not-found-text`]}>
                I {`couldn't`} find the page you were looking for. If this is a
                mistake, you can <Link href="/contact">contact me.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotFoundPage;
