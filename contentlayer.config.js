import { defineDocumentType, makeSource } from "contentlayer/source-files";

import highlight from "rehype-highlight";

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
  mdx: { rehypePlugins: [highlight] },
  documentTypes: [Post],
});
