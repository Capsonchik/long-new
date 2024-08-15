import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "../../apiConfig/apiConfig.js";

export const fetchGetNextFirstParams = createAsyncThunk(
  'firstNextParam',
  async () => {
    try {
      const response = await axiosMainRequest.get(`navigator/waterflow_get_categories_ids/`);
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

export const fetchGetNextSecondParams = createAsyncThunk(
  'nextSecondParam',
  async (data) => {
    const {block_id, category_id} = data;
    try {
      const response = await axiosMainRequest.get(`navigator/waterflow_get_categories_ids/?slave_block_name=${category_id}&category_id=${block_id}`);
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

export const fetchGetNextThirdParams = createAsyncThunk(
  'nextThirdParam',
  async (data) => {
    const {block_id, category_id} = data;
    try {
      const response = await axiosMainRequest.get(`navigator/waterflow_get_categories_ids/?slave_block_name=${category_id}&category_id=${block_id}`);
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

export const fetchGetNextForthParams = createAsyncThunk(
  'nextForthParam',
  async (data) => {
    const {block_id, category_id} = data;
    try {
      const response = await axiosMainRequest.get(`navigator/waterflow_get_categories_ids/?slave_block_name=${category_id}&category_id=${block_id}`);
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

export const fetchGetNextFifthParams = createAsyncThunk(
  'nextFifthParam',
  async (data) => {
    const {block_id, category_id} = data;
    try {
      const response = await axiosMainRequest.get(`navigator/waterflow_get_categories_ids/?slave_block_name=${category_id}&category_id=${block_id}`);
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

export const fetchGetNextAnswers = createAsyncThunk(
  'nextAnswers',
  async (id) => {
    try {
      const response = await axiosMainRequest.get(`navigator/get_question_variants/?question_id=${id}`);
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

export const fetchPostNextGraphData = createAsyncThunk(
  'postGraphInfo',
  async (data) => {
    try {
      const response = await axiosMainRequest.post(`/visualizations/crosstabulation_barcharts_percentage/`, data);
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