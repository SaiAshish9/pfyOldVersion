import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";

export function getGigWithoutStatus(dispatchGig) {
  const source = axios.CancelToken.source();
  axios
    .get(`mission/fetch`, {
      cancelToken: source.token,
    })
    .then((response) => {
      const gigData = response.data.missions;
      // setGig(gigData);
      dispatchGig({
        type: "FETCH_GIGS",
        payload: gigData,
      });
    })
    .catch((error) => {
      if (error === axios.isCancel(error)) {
        console.log("caught cancel");
      }
      console.log(error.response);
    });
}
