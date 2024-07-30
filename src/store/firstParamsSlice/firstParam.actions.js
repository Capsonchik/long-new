import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosMainRequest} from "../../apiConfig/apiConfig.js";

export const fetchGetFirstParams = createAsyncThunk(
  'firstParam',
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

export const fetchGetSecondParams = createAsyncThunk(
  'secondParam',
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

export const fetchGetThirdParams = createAsyncThunk(
  'thirdParam',
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

export const fetchGetForthParams = createAsyncThunk(
  'forthParam',
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

export const fetchGetFifthParams = createAsyncThunk(
  'fifthParam',
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

export const fetchGetAnswers = createAsyncThunk(
  'answers',
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