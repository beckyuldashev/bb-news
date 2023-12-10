import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page_number = 1, page_size = 10) => {
  try {
    const res = await axios.get(BASE_URL + '/search', {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size
      }
    })
    return res.data;
  } catch (error) {
    console.log(error);    
  }
};