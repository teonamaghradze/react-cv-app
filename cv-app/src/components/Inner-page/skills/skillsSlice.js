import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: { skills: [], isLoading: false, isFormShowing: false },
  reducers: {
    addSkill: (state, action) => {
      const newSkill = action.payload;

      const isDuplicate = state.skills.some(
        (skill) => skill.skillName === newSkill.skillName
      );

      if (!isDuplicate) {
        state.skills.push(newSkill);
      }
    },
    addSkillsFromServer: (state, action) => {
      state.skills = action.payload;
    },
    toggleForm: (state) => {
      state.isFormShowing = !state.isFormShowing;
    },
    toggleSkillsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {
  addSkill,
  toggleForm,
  toggleSkillsLoading,
  addSkillsFromServer,
} = skillsSlice.actions;

export default skillsSlice.reducer;
