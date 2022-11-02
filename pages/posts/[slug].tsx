import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import { Page } from "components";
import styles from "styles/post.module.css";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Page title={post.title}>
      <div className={styles["post-container"]}>
        <article className={styles.article}>
          <div>
            <h1 className={styles.heading}>{post.title}</h1>
            <div className={styles["post-meta"]}>
              <span className={styles["post-date"]}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </span>
            </div>
          </div>
          <MDXContent />
        </article>
      </div>
    </Page>
  );
};

export default PostPage;
