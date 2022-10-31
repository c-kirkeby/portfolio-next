import Highlight, { Language, defaultProps } from "prism-react-renderer";

import palenight from "prism-react-renderer/themes/palenight";

export type CodeProps = {
  children: string;
  language?: Language;
};

export const Code = ({ children, language = "markup" }: CodeProps) => {
  // return <pre>{JSON.stringify(children, null, 2)}</pre>;
  // console.log(children);
  return (
    <Highlight
      Prism={defaultProps.Prism}
      theme={palenight}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <div
                key={`item-${index}`}
                className={lineProps.className}
                style={lineProps.style}
              >
                {line.map((token, key) => {
                  const tokenProps = getTokenProps({ token, key });
                  return (
                    <span
                      key={`line-${key}`}
                      style={tokenProps.style}
                      className={tokenProps.className}
                    >
                      {tokenProps.children}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
