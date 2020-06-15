import React, { createContext, useReducer, useContext } from "react";

const myInternshipContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INTERNSHIPS":
      return action.payload;
    default:
      return state;
  }
};

export function InternshipProvider(props) {
  const [internship, dispatchInternship] = useReducer(reducer, {});
  return (
    <myInternshipContext.Provider
      value={{ internship, dispatchInternship }}
      {...props}
    />
  );
}

export function InternshipContext() {
  const myContext = useContext(myInternshipContext);
  if (!myContext) {
    throw new Error("userContext must be used within a UserProvider");
  }

  return myContext;
}
