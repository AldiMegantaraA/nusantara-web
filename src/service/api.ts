// src/services/newsApi.ts
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const API_URL = import.meta.env.VITE_API_URL;

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
  } else if (type === 'jobs') {
    return json.data.map((item: any) => ({
        id: item.ID,
        title: item.Title,
        brand: item.Brand,
        placement: item.Placement,
        requirements: item.Requirements,
        benefits: item.Benefits,
        email: item.Email,
        subject: item.SubjectEmail,
        postedAt: item.PostedAt
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

export async function login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}
