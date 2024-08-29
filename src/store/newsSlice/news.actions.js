import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosNewsRequest} from "../../apiConfig/apiConfig.js";

export const fetchGetNews = createAsyncThunk(
  'getNews',
  async () => {
    const response = await axiosNewsRequest.get(`latest?apikey=pub_52032b3ad75b280b402ad6e014c266d77bd35&category=politics&country=bd`);
    return response.data.results;
  }
);