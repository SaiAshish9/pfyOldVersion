import axios from "axios";
import Cookies from "js-cookie";
// import { tokenHeader } from "../constant/tokenHeader";

export const loginApi = (
  userCredential,
  registrationRequired,
  history,
  loginDispatch
) => {
  console.log(userCredential, registrationRequired, history, loginDispatch);
  axios
    .post(`auth/login`, userCredential)
    .then((res) => {
      if (res.data.statusCode === 200) {
        loginDispatch({ type: "LOGIN_SUCCESS", userToken: res.data.token });
        Cookies.set("token", res.data.token);
        history.push({
          pathname: "/home",
          // pathname:"/preferences",
          state: { headers: { token: res.data.token } },
        });
      } else if (res.data.statusCode === 210) {
        registrationRequired();
      }
    })
    .catch((e) => {
      loginDispatch({ type: "LOGIN_FAIL", errorData: e.response });
      console.log(e.response);
    });
};
