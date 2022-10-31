import { Code, CodeProps } from "components";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface MDXProps {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}

const components = {
  Code: (props: CodeProps) => {
    return <Code>{props.children}</Code>;
  },
  CodeBlock: (props: CodeProps) => {
    return <Code language={props.language}>{props.children}</Code>;
  },
};

export const MDX = ({ content }: MDXProps) => {
  // @todo - Type signature for TinaMarkdown is expecting an empty components
  // object. Possibly known issue: https://github.com/tinacms/tinacms/issues/2131
  // type TinaMarkdown = ({
  //   content: TinaMarkdownContent
  //   components?: Components<{}>
  //  }) => JSX.Element
  return <TinaMarkdown content={content} components={components} />;
};
