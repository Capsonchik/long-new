import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "../../apiConfig/apiConfig.js";

export const fetchGetHiData = createAsyncThunk(
  'hiData',
  async (data) => {

    try {
      const response = await axiosMainRequest.post(`/analyses/chi_square_table/`, data);
      if (response.status === 200) {
        return response.data;
      } else {
        return 'error';
      }
    } catch (error) {
      return 'throwError(error)';
    }
  }
);