// src/services/newsApi.ts


const API_URL = "https://script.google.com/macros/s/AKfycbzitNyzBUP5QVrZCNd1j3tdiA7b6qgQMm4rAX6zadBqhYAwVItUmtjMz4uuAY12Xh4/exec";

// Fetch semua news
export async function fetchNews(type: string): Promise<[]> {
  const res = await fetch(`${API_URL}?type=${type}`);
  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch news");
  }

  // pastikan key dari API match dengan NewsPost
  if(type === 'news') {
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
  } else if (type === 'subscribe') {
    return json.data.map((item: any) => ({
        id: item.ID,
        email: item.Email,
        joinDate: item.JoinDate,
    }));
  } else {
    return json.data.map((item: any) => ({
        id: item.ID,
        name: item.Name,
        phoneNumber: item.Number,
        category: item.Category,
        companyName: item.Company,
        email: item.Email,
        message: item.Message,
        date: item.Date,
    }));
  }
}
