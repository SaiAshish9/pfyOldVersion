import { createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { tokenHeader } from "../constant/tokenHeader";

const LoginContext = createContext();

export const loginUser = async (
  userCredential,
  registrationRequired,
  history,
  dispatch
) => {
  try {
    const res = await axios.post(`auth/login`, userCredential);
    if (res.data.statusCode === 200) {
      dispatch({ type: "LOGIN_SUCCESS", userToken: res.data.token });
      Cookies.set("token", res.data.token);
      history.push({
        pathname: "/home",
        state: { headers: { token: res.data.token } },
      });
    } else if (res.data.statusCode === 210) {
      registrationRequired();
    }
  } catch (e) {
    dispatch({ type: "LOGIN_FAIL", errorData: e.response });
    console.log(e.response);
  }
};

export default LoginContext;
