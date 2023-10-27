import { createSlice } from "@reduxjs/toolkit";

export const educationSlice = createSlice({
  name: "education",
  initialState: { educations: [], isLoading: false },
  reducers: {
    addEducations: (state, action) => {
      state.educations = action.payload;
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { addEducations, toggleLoading } = educationSlice.actions;

export default educationSlice.reducer;
