import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";

export function userApi() {
  const source = axios.CancelToken.source();
  axios
    .get(`home`, tokenHeader(), { cancelToken: source.token })
    .then((res) => {
      console.log("mounting", res.data);
      const userData = res.data;
      return userData;
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("caught cancel");
      } else {
        console.log(error.response);
      }
    });
}
