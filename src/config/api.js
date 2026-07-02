import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const API = {
  // ─── AUTH ───
  register: `${BASE_URL}/register`,
  login: `${BASE_URL}/login`,
  logout: `${BASE_URL}/logout`,
  me: `${BASE_URL}/me`,

  // ─── ADMIN ───
  adminDashboard: `${BASE_URL}/admin/dashboard`,

  // ─── STUDENT ───
  studentDashboard: `${BASE_URL}/student/dashboard`,

  // ─── existing content endpoints ───
  heroSlider: `${BASE_URL}/hero-sliders`,
  aboutSection: `${BASE_URL}/about-section`,
  programs: `${BASE_URL}/programs`,
  coursesSection: `${BASE_URL}/courses-section`,
  publishedBooks: `${BASE_URL}/published-books`,
  featuredStory: `${BASE_URL}/featured-story`,
  newsSection: `${BASE_URL}/news-section`,
  communitySection: `${BASE_URL}/community-section`,
  achieversSection: `${BASE_URL}/achievers-section`,
  gallerySection: `${BASE_URL}/gallery-section`,
  contests: `${BASE_URL}/contests`,
  winners: `${BASE_URL}/winners`,
};

// ─── AXIOS INSTANCE WITH AUTO TOKEN ───
export const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Attach token automatically to every request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto logout on 401 (expired/invalid token)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);