
import styled from 'styled-components'

const placeholderArticles = [
  {
    key: '34k5helkjt34kh345h3k4j5h',
    title: 'How to deploy a nested React app',
    description: 'While working on the new Next.js version of my site I encountered...'
  },
  {
    key: 'askfwj32jl2j34lj2l3kj4',
    title: 'Writing code like making sourdough bread',
    description: 'Many parallels can be drawn between baking sourdough bread and...'
  }
]

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Article = styled.article`

`

const ArticleHeadline = styled.h2`
  
`

const ArticleBlurb = styled.p`

`

const Posts = () =>
  <Section>
    <h1>Blog</h1>
    {placeholderArticles.map(article => (
      <Article key={article.key}>
        <ArticleHeadline>{article.title}</ArticleHeadline>
        <ArticleBlurb>{article.description}</ArticleBlurb>
      </Article>
    ))}
  </Section>

export default Posts