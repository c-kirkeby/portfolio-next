import Page from "../components/Page";
import styles from "../styles/index.module.scss";
import Card from "../components/Card";
import { getStaticPropsForTina, gql } from "tinacms";

export const getStaticProps = async () => {
  // TODO: Don't load all posts, only get the latest. For some reasn TinaCMS
  //       doesn't seem to handle the "first" and "last" arguments.
  const tinaProps = await getStaticPropsForTina({
    query: gql`
      query {
        getPostsList {
          edges {
            node {
              data {
                title
                date
                excerpt
              }
              sys {
                filename
              }
            }
          }
        }
      }
    `,
    variables: {},
  });

  return {
    props: {
      ...tinaProps
    },
  };
};

const IndexPage = (props) => {
  const post = props.data.getPostsList.edges[0];
  return (
    <Page title={`Home · Christian Kirkeby`}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles[`hero-title`]}>{`Hi I'm Christian.`}</h1>
          <p className={styles[`hero-text`]}>
            A Brisbane-based Front-end web developer, QA Manager and bread-baking
            hobbyist.
          </p>
        </div>
        <Card
          key={post.node.sys.filename}
          title={post.node.data.title}
          content={post.node.data.excerpt}
          link={`/blog/${post.node.sys.filename}`}
        />
      </div>
    </Page>
  );
}

export default IndexPage;
