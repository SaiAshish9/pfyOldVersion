import React, { createContext, useContext, useReducer } from "react";

const myUserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER":
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
  const [user, dispatchUser] = useReducer(reducer, {});
  return <myUserContext.Provider value={{ user, dispatchUser }} {...props} />;
}

export function UserContext() {
  const myContext = useContext(myUserContext);
  if (!myContext) {
    throw new Error("userContext must be used within a UserProvider");
  }
  return myContext;
}
