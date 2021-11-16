import { TinaMarkdown } from "tinacms/dist/rich-text";
import Code from "./Code";

const components = {
  code: (props) => {
    return <Code>{props.children}</Code>;
  },
  code_block: (props) => {
    return <Code lang={props.language}>{props.children}</Code>;
  },
};

const MDX = ({ content }) => {
  return <TinaMarkdown content={content} components={components} />;
};

export default MDX;
