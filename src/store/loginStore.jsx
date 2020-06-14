import React, { createContext, useContext, useReducer } from "react";

const myLoginContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return { ...state, userToken: action.userToken };
    }

    case "LOGIN_FAIL": {
      return {
        ...state,
        userToken: action.userToken,
        loginError: action.errorData,
      };
    }
    default:
      return state;
  }
}

export function LoginProvider(props) {
  const [login, loginDispatch] = useReducer(reducer, {
    userToken: "",
    loginError: "",
  });

  return (
    <myLoginContext.Provider value={{ login, loginDispatch }} {...props} />
  );
}

export function LoginContext() {
  const myContext = useContext(myLoginContext);
  if (!myContext) {
    throw new Error("userContext must be used within a UserProvider");
  }
  return myContext;
}
