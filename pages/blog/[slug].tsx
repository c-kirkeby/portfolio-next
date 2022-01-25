import { staticRequest, gql } from "tinacms";
import { useRouter } from "next/router";
import { MDX, Page } from "components";
import NotFoundPage from "pages/404";
import styles from "styles/post.module.css";
import { epochToLocaleDateString } from "lib/dateUtil";
import { BlogPostData, BlogPostList } from "interfaces/blog.interface";

interface BlogPostParams {
  params: {
    slug: "string";
  };
}

export const getStaticPaths = async () => {
  // @todo - raise issue with TinaCMS team to change type signature.
  // @ts-ignore
  const postsListData: BlogPostList[] = await staticRequest({
    query: gql`
      {
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
  const paths = postsListData.getPostsList.edges.map((edge) => {
    return { params: { slug: edge.node.sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const query = gql`
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
  `;
  const variables = {
    relativePath: context.params.slug + ".mdx",
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      query,
      variables,
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
  const router = useRouter();

  if (!router.isFallback && !data?.getPostsDocument && !slug) {
    return <NotFoundPage />;
  }
  const { title, coverImage, date, author, body } = data.getPostsDocument.data;

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
                <div className={styles["post-meta"]}>
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
