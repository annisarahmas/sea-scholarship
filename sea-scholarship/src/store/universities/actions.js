import * as constants from "./constants";
import axios from "axios";

export const fetchUniversity = () => (dispatch) => {
  dispatch(fetchUniversityStart);
  axios
    .get(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*"
    )
    .then((response) => {
      dispatch(fetchUniversitySuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchUniversityFail(error));
    });
};

export function fetchUniversityStart() {
  return {
    type: constants.FETCH_UNIVERSITY_START,
  };
}

export function fetchUniversitySuccess(university) {
  return {
    type: constants.FETCH_UNIVERSITY_SUCCESS,
    university,
  };
}

export function fetchUniversityFail(error) {
  return {
    type: constants.FETCH_UNIVERSITY_FAIL,
    error,
  };
}
