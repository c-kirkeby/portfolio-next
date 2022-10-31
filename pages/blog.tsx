import { Card, Page } from "components";

import { BlogPostList } from "interfaces/blog.interface";
import { client } from ".tina/__generated__/client";
import styles from "styles/blog.module.css";
import { useTina } from "tinacms/dist/edit-state";

export interface BlogPageProps {
  [key: string]: BlogPostList;
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postsConnection();

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const posts = data.postsConnection.edges;
  console.log(posts);
  return (
    <Page title={`Posts · Christian Kirkeby`}>
      <div className={styles["posts-container"]}>
        <h1 className={styles.heading}>Posts</h1>
        <section className={styles.posts}>
          {posts.map((post) => (
            <Card
              key={post.node._sys.filename}
              className={styles.post}
              title={post.node.title}
              content={post.node.excerpt}
              link={`/blog/${post.node._sys.filename}`}
            />
          ))}
        </section>
      </div>
    </Page>
  );
};

export default BlogPage;
