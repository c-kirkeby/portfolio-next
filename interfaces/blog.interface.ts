import { TinaMarkdownContent } from "tinacms/dist/rich-text";

export interface BlogPostList {
  getPostsList: {
    [key: string]: BlogPostEdges[];
  };
}

export interface BlogPostEdges {
  node: BlogPostNode;
}

export interface BlogPostNode {
  sys: {
    filename: string;
  };
  data: BlogPostData;
}

export interface BlogPostData {
  title: string;
  // TinaCMS returns the date as an epoch
  date: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  body: TinaMarkdownContent | TinaMarkdownContent[];
}
