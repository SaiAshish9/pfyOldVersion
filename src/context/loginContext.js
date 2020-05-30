import { createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { tokenHeader } from "../constant/tokenHeader";

const LoginContext = createContext();

export const loginUser = async (userCredential, history, dispatch) => {
  try {
    const res = await axios.post(`auth/login`, userCredential);
    console.log("run 2", res);
    if (res.data.statusCode === 200) {
      //   Cookies.set("token", res.data.token);
      dispatch({ type: "LOGIN_SUCCESS", userToken: res.data.token });

      console.log("run 3", res.data.token);
      history.push({
        pathname: "/home",
        state: { headers: { token: res.data.token } },
      });
    } else if (res.data.statusCode === 210) {
      dispatch({ type: "REGISTRATION_NEEDED", registrationNeeded: true });
    }
  } catch (e) {
    dispatch({ type: "LOGIN_FAIL", errorData: e.response });
    console.log(e.response);
  }
};

export default LoginContext;
