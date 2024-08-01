import axios from "axios";

export const MAIN_API = 'https://7a58-212-45-6-6.ngrok-free.app/v1/'

const createAxiosMainRequest = () => {
  const instance = axios.create({
    baseURL: MAIN_API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'ru',
      "ngrok-skip-browser-warning": 'true',
      "Access-Control-Request-Method": "GET",
      "Origin": "https://long-new.vercel.app"
    },
    withCredentials: true
  });

  return instance;
};

export const axiosMainRequest = createAxiosMainRequest();