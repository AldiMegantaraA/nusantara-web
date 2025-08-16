export interface NewsPost {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    category: string;
    status: 'draft' | 'published';
    tags: string[];
  }
  
  export interface NewsFormData {
    title: string;
    content: string;
    excerpt: string;
    author: string;
    imageUrl: string;
    category: string;
    status: 'draft' | 'published';
    tags: string;
  }