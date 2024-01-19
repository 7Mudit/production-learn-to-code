import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
// import { rehypePrettyCodeOptions } from "./lib/rehypePrettyCode";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "This will be the image of blog",
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
      resolve: (doc) => `/nptel-notes/${doc._raw.flattenedPath}`,
    },
  },
}));

// export default makeSource({
//   contentDirPath: "./coursesContent/nptel-notes/quantumPhysics",
//   documentTypes: [Post],
//   mdx: {
//     rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
//   },
// });

export default makeSource({
  contentDirPath: "./coursesContent/nptel-notes/quantumPhysics",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
        },
      ],
    ],
  },
});
