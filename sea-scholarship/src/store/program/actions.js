import * as constants from "./constants";
import axios from "axios";

export const fetchProgram = () => (dispatch) => {
  dispatch(fetchProgramStart);
  axios
    .get(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan"
    )
    .then((response) => {
      dispatch(fetchProgramSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchProgramFail(error));
    });
};

export function fetchProgramStart() {
  return {
    type: constants.FETCH_PROGRAM_START,
  };
}

export function fetchProgramSuccess(program) {
  return {
    type: constants.FETCH_PROGRAM_SUCCESS,
    program,
  };
}

export function fetchProgramFail(error) {
  return {
    type: constants.FETCH_PROGRAM_FAIL,
    error,
  };
}
