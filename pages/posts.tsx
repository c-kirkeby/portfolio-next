import { Card, Page } from "components";
import { Post, allPosts } from "contentlayer/generated";

import { compareDesc } from "date-fns";
import styles from "styles/posts.module.css";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const PostsPage = ({ posts }: { posts: Post[] }) => {
  return (
    <Page title={`Posts · Christian Kirkeby`}>
      <div className={styles["posts-container"]}>
        <h1 className={styles.heading}>Posts</h1>
        <section className={styles.posts}>
          {posts.map((post, index) => (
            <Card
              key={index}
              className={styles.post}
              title={post.title}
              content={post.excerpt}
              link={post.url}
            />
          ))}
        </section>
      </div>
    </Page>
  );
};

export default PostsPage;
