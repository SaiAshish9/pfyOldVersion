import React, { createContext, useReducer, useContext } from "react";
const myUserProfileContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER_PROFILE":
      return action.payload;
    default:
      return state;
  }
};

export function UserProfileProvider(props) {
  const [profileData, dispatchUserProfile] = useReducer(reducer, {});
  return (
    <myUserProfileContext.Provider
      value={{ profileData, dispatchUserProfile }}
      {...props}
    />
  );
}

export function UserProfileContext() {
  const myContext = useContext(myUserProfileContext);
  if (!myContext) {
    throw new Error("userContext must be used within a UserProvider");
  }

  return myContext;
}
