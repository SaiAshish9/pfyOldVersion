import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";
export function getInternshipWithoutStatus(dispatchInternship) {
  const source = axios.CancelToken.source();
  axios
    .get(`internship/fetch`, {
      cancelToken: source.token,
    })
    .then((response) => {
      const internshipData = response.data.internships;
      dispatchInternship({
        type: "FETCH_INTERNSHIPS",
        payload: internshipData,
      });
    })
    .catch((error) => {
      if (error === axios.isCancel(error)) {
        console.log("caught cancel");
      }
      console.log(error.response);
    });
}

export function getInternshipWithStatus(dispatchInternship, category, type) {
  const source = axios.CancelToken.source();
  console.log("aaaaaaaa", category, type);

  axios
    .get(
      `internship/fetch_with_status?&category=${category}&type=${type}`,
      tokenHeader(),
      {
        cancelToken: source.token,
      }
    )
    .then((response) => {
      const internshipData = response.data.internships;
      dispatchInternship({
        type: "FETCH_INTERNSHIPS",
        payload: internshipData,
      });
    })
    .catch((error) => {
      if (error === axios.isCancel(error)) {
        console.log("caught cancel");
      }
      console.log(error.response);
    });
}
