import { staticRequest, getStaticPropsForTina, gql } from "tinacms";
import { useRouter } from "next/router";
import MDX from "components/MDX";
import Page from "components/Page";
import NotFoundPage from "pages/404";
import styles from "styles/post.module.css";
import { epochToLocaleDateString } from "lib/dateUtil";
import { BlogPostData, BlogPostList } from "interfaces/blog.interface";

interface BlogPostParams {
  params: {
    slug: "string";
  };
}

export async function getStaticPaths() {
  // @todo - raise issue with TinaCMS team to change type signature.
  // @ts-ignore
  const postsListData: BlogPostList[] = await staticRequest({
    query: gql`
      query {
        getPostsList {
          edges {
            node {
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
    // @todo - raise issue with TinaCMS team to change type signature.
    // @ts-ignore
    paths: postsListData.getPostsList.edges.map((edge) => ({
      params: { slug: edge.node.sys.filename },
    })),
    // When creating a new document, this will allow you to see it
    // before it's fully deployed if you're in edit-mode.
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }: BlogPostParams) => {
  const { slug } = params;
  const variables = { relativePath: `${slug}.mdx` };
  const tinaProps = await getStaticPropsForTina({
    query: gql`
      query BlogPostQuery($relativePath: String!) {
        getPostsDocument(relativePath: $relativePath) {
          data {
            title
            excerpt
            date
            coverImage
            author {
              name
              picture
            }
            ogImage {
              url
            }
            body
          }
        }
      }
    `,
    variables: variables,
  });

  return {
    props: {
      ...tinaProps,
      slug,
    },
  };
};

interface BlogPostProps {
  slug: string;
  data: {
    getPostsDocument: {
      data: BlogPostData;
    };
  };
}

export default function Post({ data, slug }: BlogPostProps) {
  const { title, coverImage, date, author, body } = data.getPostsDocument.data;
  const router = useRouter();

  if (!router.isFallback && !slug) {
    return <NotFoundPage />;
  }
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
                <div>
                  <span className={styles["post-date"]}>
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
