import { Card, Page } from "components";

import { BlogPostList } from "interfaces/blog.interface";
import { client } from ".tina/__generated__/client";
import styles from "styles/index.module.scss";
import { useTina } from "tinacms/dist/edit-state";

export const getStaticProps = async (context) => {
  const { data, query, variables } = await client.queries.postsConnection({
    last: 1,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

interface IndexPageProps {
  [key: string]: BlogPostList;
}

const IndexPage = (props: any) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post = data.postsConnection.edges[0].node;

  return (
    <Page title={`Home · Christian Kirkeby`}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{`Hi I'm Christian.`}</h1>
          <p className={styles.heroText}>
            A Brisbane-based Full-stack Web Developer and bread-baking hobbyist.
          </p>
        </div>
        <Card
          key={post.id}
          title={post.title}
          content={post.excerpt}
          link={`/blog/${post._sys.filename}`}
        />
      </div>
    </Page>
  );
};

export default IndexPage;
