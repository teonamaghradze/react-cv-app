import {
  addSkill,
  toggleForm,
  toggleSkillsLoading,
  addSkillsFromServer,
} from "./skillsSlice";
import skillsSlice from "./skillsSlice";

describe("skillsSlice Reducers", () => {
  it("should add a new skill if it's not a duplicate", () => {
    const initialState = {
      skills: [{ skillName: "React", skillRange: 80 }],
      isLoading: false,
      isFormShowing: false,
    };
    const newSkill = { skillName: "JavaScript", skillRange: 90 };
    const newState = skillsSlice(initialState, addSkill(newSkill));
    expect(newState.skills).toHaveLength(2);
    expect(newState.skills[1]).toEqual(newSkill);
  });

  it("should not add a duplicate skill", () => {
    const initialState = {
      skills: [{ skillName: "React", skillRange: 80 }],
      isLoading: false,
      isFormShowing: false,
    };
    const duplicateSkill = { skillName: "React", skillRange: 70 };
    const newState = skillsSlice(initialState, addSkill(duplicateSkill));
    expect(newState.skills).toHaveLength(1);
    expect(newState.skills[0]).toEqual({ skillName: "React", skillRange: 80 });
  });

  it("should toggle the isFormShowing state", () => {
    const initialState = { skills: [], isLoading: false, isFormShowing: false };
    const newState = skillsSlice(initialState, toggleForm());
    expect(newState.isFormShowing).toBe(true);
  });

  it("should toggle the isLoading state", () => {
    const initialState = { skills: [], isLoading: false, isFormShowing: false };
    const newState = skillsSlice(initialState, toggleSkillsLoading());
    expect(newState.isLoading).toBe(true);
  });

  it("should set skills from the server data", () => {
    const initialState = { skills: [], isLoading: false, isFormShowing: false };
    const serverData = [
      { skillName: "HTML", skillRange: 95 },
      { skillName: "CSS", skillRange: 90 },
    ];
    const newState = skillsSlice(initialState, addSkillsFromServer(serverData));
    expect(newState.skills).toEqual(serverData);
  });
});
