
const placeholderArticles = [
  {
    title: 'How to deploy a nested React app',
    description: 'While working on the new Next.js version of my site I encountered...'
  },
  {
    title: 'Writing code like making sourdough bread',
    description: 'Many parallels can be drawn between baking sourdough bread and...'
  }
]

export default () =>
  <section>
    <h1>Blog</h1>
    {placeholderArticles.map(article => (
      <>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </>
    ))}
  </section>