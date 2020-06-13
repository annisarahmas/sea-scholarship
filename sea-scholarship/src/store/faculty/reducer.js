import * as constants from "./constants";

export const initialState = {
  faculty: [],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FACULTY_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case constants.FETCH_FACULTY_SUCCESS:
      return {
        ...state,
        faculty: action.faculty,
        isLoading: false,
      };
    case constants.FETCH_FACULTY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default reducer;
