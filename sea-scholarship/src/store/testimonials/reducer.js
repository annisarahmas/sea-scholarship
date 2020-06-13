import * as constants from "./constants";

export const initialState = {
  testimoni: [],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_TESTIMONI_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case constants.FETCH_TESTIMONI_SUCCESS:
      return {
        ...state,
        testimoni: action.testimoni,
        isLoading: false,
      };
    case constants.FETCH_TESTIMONI_FAIL:
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
