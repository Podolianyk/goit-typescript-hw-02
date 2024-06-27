import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "cx50bD9VZhVIa71auLQeSiPQdGYykeS9Far4f5uiI6Q";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export interface UnsplashPhoto {
  id: string;
  description: string;
  alt_description: string;
  likes: number;
  user: {
    username: string;
  };
  urls: {
    regular: string;
    small: string;
  };
}

interface UnsplashResponse {
  results: UnsplashPhoto[];
  total_pages: number;
}

interface UnsplashApiResponse {
  data: {
    results: UnsplashPhoto[];
    total_pages: number;
  };
}

export const getPhotos = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  try {
    const response: UnsplashApiResponse = await axios.get(`/search/photos`, {
      params: {
        query: query,
        page: page,
      },
    });
    const total_pages: number = response.data.total_pages;
    return {
      results: response.data.results,
      total_pages: total_pages,
    };
  } catch (error) {
    console.log("Error");
    throw error;
  }
};
