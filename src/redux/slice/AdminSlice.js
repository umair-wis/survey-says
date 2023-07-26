import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  formData: [],
  loader: false
};

export const formDataList = createAsyncThunk("formDataList", async ({pageSize, pageNumber, config}) => {
  const response = await axios.get(`https://api-form.surveysays.xyz/Survey/getAllSurveys?pageSize=${pageSize}&pageNumber=${pageNumber}`, config)
  return response.data;
});

const AdminSlice = createSlice({
  name: "AdminSlice",

  initialState,

  extraReducers: (builder) => {
    //  User login Api process
    builder.addCase(formDataList.pending, (state) => {
      state.loader = true;
    });

    builder.addCase(formDataList.fulfilled, (state, action) => {
      state.formData = action.payload;
      state.loader = false;
      toast.success("Form Data Fetched.");
    });
    builder.addCase(formDataList.rejected, (state, action) => {
      state.loader = false;
    });
  },
});

export default AdminSlice.reducer;
