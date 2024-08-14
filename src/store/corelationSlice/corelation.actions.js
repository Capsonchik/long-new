import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "../../apiConfig/apiConfig.js";

export const fetchGetCorelationData = createAsyncThunk(
  'coreletionData',
  async (data) => {
    try {
      const response = await axiosMainRequest.post(`analyses/pearson_correlations_table`, data);
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