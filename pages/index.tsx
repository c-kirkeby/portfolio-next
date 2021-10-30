import Page from "../components/Page";
import styles from "../styles/index.module.scss";
import Card from "../components/Card";

const IndexPage = () => (
  <Page title={`Home · Christian Kirkeby`}>
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles[`hero-title`]}>{`Hi I'm Christian.`}</h1>
        <p className={styles[`hero-text`]}>
          A Brisbane-based Front-end web developer, QA Analyst and bread-baking
          hobbyist.
        </p>
      </div>
      <Card
        title={`Complete Markdown syntax reference`}
        content={`Markdown: Syntax Overview Philosophy Inline HTML Automatic Escaping for Special Characters Block Elements Paragraphs and Line Breaks Headers…`}
      />
    </div>
  </Page>
);

export default IndexPage;
