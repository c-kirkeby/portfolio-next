// import { BlogPostData, BlogPosstList } from "interfaces/blog.interface";
import { MDX, Page } from "components";

import NotFoundPage from "pages/404";
import { client } from ".tina/__generated__/client";
import { epochToLocaleDateString } from "lib/dateUtil";
import styles from "styles/post.module.css";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const { data } = await client.queries.postsConnection();
  const paths = data.postsConnection.edges?.map((edge) => {
    return { params: { slug: edge?.node?._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: any) => {
  const { data, query, variables } = await client.queries.posts({
    relativePath: params.slug + ".mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
export default function Post({ data, slug }: any) {
  const router = useRouter();

  if (!router.isFallback && !data?.posts && !slug) {
    return <NotFoundPage />;
  }
  const { title, coverImage, date, author, body } = data.posts;

  return (
    <Page title={title}>
      <div className={styles["post-container"]}>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article className={styles.article}>
              <div>
                <h1 className={styles.heading}>{title}</h1>
                {coverImage ? coverImage : null}
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    {epochToLocaleDateString(date, "en-AU")}
                  </span>
                  <span>{author}</span>
                </div>
              </div>
              <MDX content={body} />
            </article>
          </>
        )}
      </div>
    </Page>
  );
}
