import { RouteMappingPlugin, defineConfig, defineSchema } from "tinacms";

import { client } from "./__generated__/client";

const schema = defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      format: "mdx",
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

export default schema;

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    const RouteMapping = new RouteMappingPlugin((collection, document) => {
      if (["page"].includes(collection.name)) {
        if (document._sys.filename === "home") {
          return "/";
        }
      }

      if (["post"].includes(collection.name)) {
        return `/blog/${document._sys.filename}`;
      }

      return undefined;
    });

    cms.plugins.add(RouteMapping);

    return cms;
  },
});
