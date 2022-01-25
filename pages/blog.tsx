import { staticRequest, gql } from "tinacms";
import { Card, Page } from "components";
import styles from "styles/blog.module.css";
import { BlogPostList } from "interfaces/blog.interface";

export const getStaticProps = async () => {
  const query = gql`
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
  `;
  const variables = {};
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }
  return {
    props: {
      query,
      variables,
      data,
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
