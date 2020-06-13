import * as constants from "./constants";

export const initialState = {
  university: [],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_UNIVERSITY_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case constants.FETCH_UNIVERSITY_SUCCESS:
      return {
        ...state,
        university: action.university,
        isLoading: false,
      };
    case constants.FETCH_UNIVERSITY_FAIL:
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
