export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown content
  author: string;
  coverImage?: string;
  tags?: string[];
} 