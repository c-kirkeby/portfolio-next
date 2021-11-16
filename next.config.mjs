import mdx from "@next/mdx";
// import remarkHighlight from "remark-highlight.js";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkHighlight],
  },
});

export default withMDX({
  pageExtensions: ["tsx", "js", "md", "mdx"],
});
