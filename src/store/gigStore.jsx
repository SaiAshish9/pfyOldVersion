import React, { createContext, useReducer, useContext } from "react";

const myGigContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_GIGS":
      return action.payload;
    default:
      return state;
  }
};

export function GigProvider(props) {
  const [gig, dispatchGig] = useReducer(reducer, {});
  return <myGigContext.Provider value={{ gig, dispatchGig }} {...props} />;
}

export function GigContext() {
  const myContext = useContext(myGigContext);
  if (!myContext) {
    throw new Error("userContext must be used within a UserProvider");
  }

  return myContext;
}
