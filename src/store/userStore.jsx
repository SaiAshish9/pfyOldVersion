import React, { useReducer, useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { tokenHeader } from "../constant/tokenHeader";

const context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchUser":
      return action.payload;
    default:
      return state;
  }
};

export function changeUser(userData) {
  return {
    type: "fetchUser",
    payload: userData,
  };
}

export function UserProvider(props) {
  const location = useLocation();
  const [user, dispatchUser] = useReducer(reducer, {});
  useEffect(() => {
    if (location.pathname === "/home") {
      const source = axios.CancelToken.source();
      axios
        .get(`home`, tokenHeader(), { cancelToken: source.token })
        .then((res) => {
          console.log("mounting", res.data);
          const userData = res.data;
          dispatchUser(changeUser(userData));
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("caught cancel");
          } else {
            console.log(error.response);
          }
        });
      return () => {
        console.log("un mounting");
        source.cancel();
      };
    }
  }, []);

  return <context.Provider value={{ user, dispatchUser }} {...props} />;
}

export function UserContext() {
  const myContext = useContext(context);
  if (!myContext) {
    throw new Error("userInfo must be used within a UserProvider");
  }
  return myContext;
}
