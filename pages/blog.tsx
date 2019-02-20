
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

export default () =>
  <section>
    <h1>Blog</h1>
    {placeholderArticles.map(article => (
      <article key={article.key}>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
      </ article>
    ))}
  </section>