import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Excerpt",
          name: "excerpt",
        },
        {
          type: "string",
          label: "Cover Image",
          name: "coverImage",
        },
        {
          type: "string",
          label: "Date",
          name: "date",
        },
        {
          type: "object",
          label: "Author",
          name: "author",
          fields: [
            {
              type: "string",
              label: "Name",
              name: "name",
            },
            {
              type: "string",
              label: "Picture",
              name: "picture",
            },
          ],
        },
        {
          type: "object",
          label: "OG Image",
          name: "ogImage",
          fields: [
            {
              type: "string",
              label: "Url",
              name: "url",
            },
          ],
        },
        {
          type: "rich-text",
          label: "Body",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "Code",
              label: "Code",
              fields: [
                {
                  name: "language",
                  label: "Language",
                  type: "string",
                  options: [
                    "typescript",
                    "javascript",
                    "bash",
                    "jsx",
                    "js",
                    "ts",
                  ],
                },
                {
                  name: "code",
                  label: "Code",
                  type: "string",
                  ui: {
                    component: "textarea",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
