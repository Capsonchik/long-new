import axios from "axios";

export const MAIN_API = 'https://dcf4-212-45-6-6.ngrok-free.app/v1/'

const createAxiosMainRequest = () => {
  const instance = axios.create({
    baseURL: MAIN_API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'ru',
      "ngrok-skip-browser-warning": 'true',
    },
    withCredentials: true
  });

  return instance;
};

export const axiosMainRequest = createAxiosMainRequest();