import { staticRequest, getStaticPropsForTina, gql } from "tinacms";
// import { TinaMarkdown } from "tinacms/dist/rich-text";
import MDX from "../../components/MDX";
import { useRouter } from "next/router";
import NotFoundPage from "pages/404";
import Page from "../../components/Page";
import styles from "styles/post.module.css";
import { epochToLocaleDateString } from "lib/dateUtil";

export async function getStaticPaths() {
  const postsListData = await staticRequest({
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
    paths: postsListData.getPostsList.edges.map((edge) => ({
      params: { slug: edge.node.sys.filename },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
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

export default function Post({ data, slug }) {
  const { title, coverImage, date, author, body, ogImage } =
    data.getPostsDocument.data;
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
            <article>
              <div>
                <h1>{title}</h1>
                {coverImage ? coverImage : null}
                <div>
                  <span>{epochToLocaleDateString(date, "en-AU")}</span>
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
