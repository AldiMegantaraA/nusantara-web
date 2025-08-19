// src/services/newsApi.ts
import { NewsPost } from "../types/news";

const API_URL = "https://script.google.com/macros/s/AKfycbzitNyzBUP5QVrZCNd1j3tdiA7b6qgQMm4rAX6zadBqhYAwVItUmtjMz4uuAY12Xh4/exec";

// Fetch semua news
export async function fetchNews(): Promise<NewsPost[]> {
  const res = await fetch(API_URL);
  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch news");
  }

  // pastikan key dari API match dengan NewsPost
  return json.data.map((item: any) => ({
    id: item.ID,
    title: item.Title,
    content: item.Content,
    excerpt: item.Excerpt,
    author: item.Author,
    imageUrl: item["Image URL"],
    category: item.Category,
    status: item.Status,
    tags: item.Tags ? item.Tags.split(",").map((t: string) => t.trim()) : [],
    publishedAt: item.PublishedAt,
  }));
}
