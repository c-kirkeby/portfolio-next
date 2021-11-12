import { staticRequest, getStaticPropsForTina } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useRouter } from "next/router";
import Head from "next/head";
import NotFoundPage from "pages/404";
import Page from "../../components/Page";
import styles from "styles/post.module.css";

export async function getStaticPaths() {
  const postsListData = await staticRequest({
    query: `
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
    query: `
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
      ...tinaProps, // {data: {...}, query: '...', variables: {...}}
      slug,
    },
  };
};

const Button = () => <button>Press me</button>;

export default function Post({ data, slug }) {
  const { title, coverImage, date, author, body, _ogImage } =
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
              <Head>
                <title>{title} | Next.js Blog Example with</title>
                {/* <meta property="og:image" content={ogImage.url} /> */}
              </Head>
              <div>
                {title}
                {coverImage ? coverImage : null}
                {date}
                {author}
              </div>
              <TinaMarkdown content={body} />
            </article>
          </>
        )}
      </div>
    </Page>
  );
}
