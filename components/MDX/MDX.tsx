import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { Code, CodeProps } from "components";

interface MDXProps {
  content: TinaMarkdownContent | TinaMarkdownContent[];
}

const components = {
  code: (props: CodeProps) => {
    return <Code>{props.children}</Code>;
  },
  code_block: (props: CodeProps) => {
    return <Code lang={props.lang}>{props.children}</Code>;
  },
};

export const MDX = ({ content }: MDXProps) => {
  // @todo - Type signature for TinaMarkdown is expecting an empty components
  // object. Possibly known issue: https://github.com/tinacms/tinacms/issues/2131
  // type TinaMarkdown = ({
  //   content: TinaMarkdownContent
  //   components?: Components<{}>
  //  }) => JSX.Element
  return (
    <TinaMarkdown
      content={content}
      /* @ts-ignore */
      components={components}
    />
  );
};
