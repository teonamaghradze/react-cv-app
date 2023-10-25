import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {
    addSkill: (state, action) => {
      const newSkill = action.payload;

      const isDuplicate = state.some(
        (skill) => skill.skillName === newSkill.skillName
      );

      if (!isDuplicate) {
        state.push(newSkill);
      }
    },
  },
});

export const { addSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
