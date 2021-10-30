import { staticRequest, gql, getStaticPropsForTina } from "tinacms";
import { useRouter } from 'next/router'
import Head from 'next/head'
import NotFoundPage from "pages/404";
import Page from '../../components/Page'

export async function getStaticPaths({ params }) {
  const { slug } = params;
  const variables = { relativePath: `${slug.md}` };
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
    variables,
  });
  return {
    props: {
      ...tinaProps,
      slug,
    },
  };
}

const BlogPost = ({ data, slug }) => {
    const {
        title,
        coverImage,
        date,
        author,
        body,
        ogImage,
      } = data.getPostsDocument.data
      const router = useRouter()
    
    if (!router.isFallback && !post?.slug) {
    if (!router.isFallback && !slug) {
        return <NotFoundPage />
      }
      return (
        <Page title={title}>
          <div>
            {router.isFallback ? (
              <h1>Loading…</h1>
            ) : (
              <>
                <article className="mb-32">
                  <Head>
                    <title>
                 {title} | Next.js Blog Example with
                    </title>
                    <meta property="og:image" content={ogImage.url} />
                  </Head>
                  <div>
                      {title}
                    {coverImage}
                    {date}
                    {author}
                  </div>
                  <div>
                    {body} </div>
                </article>
              </>
            )}
          </div>
        </Page>
      )
};
