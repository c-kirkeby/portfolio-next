import Page from "../components/Page";
import styles from "../styles/blog.module.css";
import Card from "../components/Card";

const posts = [
  {
    id: "1",
    title: "Hello World",
    date: "2020-01-01",
    content:
      "Markdown: Syntax Overview Philosophy Inline HTML Automatic Escaping for Special Characters Block Elements Paragraphs and Line Breaks Headers…",
  },
  {
    id: "2",
    title: "Hello World 2",
    date: "2020-01-01",
    content:
      "My website has gone through multiple iterations over time, generally according to my increasing skill level.\nFor a while I was working on a…",
  },
  {
    id: "3",
    title: "Hello World 3",
    date: "2020-01-01",
    content:
      "In this post I'm gonna test out the syntax highlighting I can achieve with  Prism.js . TypeScript JSX bash",
  },
];

const BlogPage = () => (
  <Page title={`Posts · Christian Kirkeby`}>
    <div className={styles[`posts-container`]}>
      <h2 className={styles.heading}>Posts</h2>
      <section className={styles.posts}>
        {posts.map((post) => (
          <Card
            key={post.id}
            className={styles.post}
            title={post.title}
            content={post.content}
          />
        ))}
      </section>
    </div>
  </Page>
);

export default BlogPage;
