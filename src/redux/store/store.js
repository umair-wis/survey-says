import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "../slice/AdminSlice";

const store = configureStore({
  reducer: {
    AdminSlice,
    //  chatbotSlice,
  },
});

export default store;