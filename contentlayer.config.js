import { defineDocumentType, makeSource } from "contentlayer/source-files";

import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "Flag to signify if a post is ready to be published yet.",
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    excerpt: {
      type: "string",
      resolve: (post) =>
        post.body.raw.split(" ").slice(0, 10).join(" ").replace(/,+$/, "") +
        "...",
    },
  },
}));

export default makeSource({
  contentDirPath: "content/posts",
  mdx: { rehypePlugins: [[rehypePrettyCode, { theme: "material-palenight" }]] },
  documentTypes: [Post],
});
