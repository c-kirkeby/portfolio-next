// import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/palenight";
import styled from 'styled-components'

export interface CodeProps {
  children: string;
  language?: Language;
}

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
`

const Line = styled.div`
  display: table-row;
`

const LineNumber = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
  color: #a6accd;
`

const Token = styled.span`
  color: #a6accd;
`


const Code = ({ children, language = "markup" }: CodeProps) => {
  return (
    <Highlight
      {...defaultProps}
      code={children?.trim()}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line {...getLineProps({ line, key: i })} key={i}>
              <LineNumber>{i + 1}</LineNumber>
              <LineContent>
              {line.map((token, key) => (
                <Token {...getTokenProps({ token, key })} key={key} />
              ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
