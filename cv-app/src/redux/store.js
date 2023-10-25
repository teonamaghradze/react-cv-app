import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../components/Inner-page/timeline/educationSlice";
import skillsReducer from "../components/Inner-page/skills/skillsSlice";

export default configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
  },
});
