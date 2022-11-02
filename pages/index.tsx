import { Card, Page } from "components";
import { Post, allPosts } from "contentlayer/generated";

import React from "react";
import { compareDesc } from "date-fns";
import styles from "styles/index.module.scss";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const IndexPage = ({
  posts,
  ...props
}: {
  posts: Post[];
  [x: string]: any;
}) => {
  const post = posts[0];
  return (
    <Page title={`Home · Christian Kirkeby`}>
      <div className={styles.container} {...props}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{`Hi I'm Christian.`}</h1>
          <p className={styles.heroText}>
            A Brisbane-based Full-stack Web Developer and bread-baking hobbyist.
          </p>
        </div>
        <Card
          key={post._id}
          title={post.title}
          content={post.excerpt}
          link={post.url}
        />
      </div>
    </Page>
  );
};

export default IndexPage;
