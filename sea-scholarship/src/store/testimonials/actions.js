import * as constants from "./constants";
import axios from "axios";

export const fetchTestimoni = () => (dispatch) => {
  dispatch(fetchTestimoniStart);
  axios
    .get(
      "https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*"
    )
    .then((response) => {
      dispatch(fetchTestimoniSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchTestimoniFail(error));
    });
};

export function fetchTestimoniStart() {
  return {
    type: constants.FETCH_TESTIMONI_START,
  };
}

export function fetchTestimoniSuccess(testimoni) {
  return {
    type: constants.FETCH_TESTIMONI_SUCCESS,
    testimoni,
  };
}

export function fetchTestimoniFail(error) {
  return {
    type: constants.FETCH_TESTIMONI_FAIL,
    error,
  };
}
