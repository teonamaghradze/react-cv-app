import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../components/Inner-page/timeline/educationSlice";

export default configureStore({
  reducer: {
    education: educationReducer,
  },
});
