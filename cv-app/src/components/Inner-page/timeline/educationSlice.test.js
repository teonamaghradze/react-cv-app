import educationReducer, {
  addEducations,
  toggleLoading,
} from "./educationSlice";

describe("educationSlice Reducer", () => {
  it("should handle adding educations", () => {
    const initialState = {
      educations: [],
      isLoading: false,
    };

    const educationsData = [
      { id: 1, school: "School 1", degree: "Degree 1" },
      { id: 2, school: "School 2", degree: "Degree 2" },
      { id: 3, school: "School 2", degree: "Degree 2" },
      { id: 4, school: "School 2", degree: "Degree 2" },

      { id: 5, school: "School 2", degree: "Degree 2" },
    ];

    const action = addEducations(educationsData);
    const newState = educationReducer(initialState, action);

    expect(newState.educations).toEqual(educationsData);
  });

  it("should handle toggling loading", () => {
    const initialState = {
      educations: [],
      isLoading: false,
    };

    const action = toggleLoading();
    const newState = educationReducer(initialState, action);

    expect(newState.isLoading).toBe(true);

    const newStateAfterTogglingAgain = educationReducer(newState, action);
    expect(newStateAfterTogglingAgain.isLoading).toBe(false);
  });
});
