import * as constants from "./constants";
import axios from "axios";

// FETCH ORDERS
export const fetchFaculty = (universityId) => (dispatch) => {
  return (dispatch) => {
    dispatch(fetchFacultyStart)
    axios
      .get("https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan")
      .then((response) => {
        dispatch(fetchFacultySuccess(response.data))
      }).catch(error => {
        dispatch(fetchFacultyFail(error))
      });
  };
};

export function fetchFacultyStart() {
  return {
    type: constants.FETCH_FACULTY_START,
  };
}

export function fetchFacultySuccess(faculty) {
  return {
    type: constants.FETCH_FACULTY_SUCCESS,
    faculty,
  };
}

export function fetchFacultyFail(error) {
  return {
    type: constants.FETCH_FACULTY_FAIL,
    error,
  };
}
