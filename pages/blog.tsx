import { getStaticPropsForTina, gql } from "tinacms";
import Card from "../components/Card";
import Page from "../components/Page";
import styles from "styles/blog.module.css";
import { BlogPostList } from "interfaces/blog.interface";

export const getStaticProps = async () => {
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
      ...tinaProps,
    },
  };
};

export interface BlogPageProps {
  [key: string]: BlogPostList;
}

const BlogPage = (props: BlogPageProps) => {
  const posts = props.data.getPostsList.edges;
  return (
    <Page title={`Posts · Christian Kirkeby`}>
      <div className={styles[`posts-container`]}>
        <h1 className={styles.heading}>Posts</h1>
        <section className={styles.posts}>
          {posts.map((post) => (
            <Card
              key={post.node.sys.filename}
              className={styles.post}
              title={post.node.data.title}
              content={post.node.data.excerpt}
              link={`/blog/${post.node.sys.filename}`}
            />
          ))}
        </section>
      </div>
    </Page>
  );
};

export default BlogPage;
