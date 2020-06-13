import * as constants from "./constants";

export const initialState = {
  program: [],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_PROGRAM_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case constants.FETCH_PROGRAM_SUCCESS:
      return {
        ...state,
        program: action.program,
        isLoading: false,
      };
    case constants.FETCH_PROGRAM_FAIL:
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
