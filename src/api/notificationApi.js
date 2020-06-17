import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";

export default function notificationApi(dispatchNotification) {
  const source = axios.CancelToken.source();
  axios
    .get(`notification/fetch`, tokenHeader(), {
      cancelToken: source.token,
    })
    .then((res) => {
      const myNotification = res.data;
      console.log("myNotification", myNotification);
      dispatchNotification({
        type: "FETCH_NOTIFICATION",
        payload: myNotification,
      });
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("caught cancel");
      } else {
        console.log(error.response);
      }
    });
}
