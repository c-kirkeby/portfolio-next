import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";

export type CodeProps = {
  children: string;
  lang?: string;
};

export const Code = ({ lang, children }: CodeProps) => {
  return (
    <SyntaxHighlighter language={lang} style={theme} showLineNumbers>
      {children}
    </SyntaxHighlighter>
  );
};
