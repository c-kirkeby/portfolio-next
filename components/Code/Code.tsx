/* eslint-disable react/no-array-index-key */
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import palenight from "prism-react-renderer/themes/palenight";

// import dracula from "prism-react-renderer/themes/dracula";

export type CodeProps = {
  children: string;
  language?: Language;
};

export const Code = ({ children, language = "markup" }: CodeProps) => {
  return (
    <Highlight
      Prism={defaultProps.Prism}
      theme={palenight}
      code={children.trim()}
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
