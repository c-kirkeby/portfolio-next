import Head from "next/head";

interface MetaProps {
  title: string;
}

export const Meta = ({ title }: MetaProps) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="Description"
      content="A web development blog and portfolio site for Christian Kirkeby."
    />
    <meta charSet="utf-8" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <title>{title}</title>
  </Head>
);
