import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";

export function getUserProfile(dispatch) {
  const source = axios.CancelToken.source();
  axios
    .get("user/", tokenHeader(), {
      cancelToken: source.token,
    })
    .then((res) => {
      const profileData = res.data;

      dispatch({
        type: "FETCH_USER_PROFILE",
        payload: profileData,
      });
    })
    .catch((error) => {
      if (error === axios.isCancel(error)) {
        console.log("caught cancel");
      }
      console.log(error.response);
    });
}
