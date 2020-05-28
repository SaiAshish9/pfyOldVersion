import { createContext } from "react";
import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";

const UserContext = createContext();

export const getUser = async (dispatch) => {
  try {
    const res = await axios.get(`home`, tokenHeader);
    const userData = res.data;
    dispatch({ type: "MY_USER", userData });
  } catch (e) {
    console.log(e.response);
  }
};

export default UserContext;
