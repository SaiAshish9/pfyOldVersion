import React, { createContext, useContext, useReducer } from "react";

const myNotificationContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NOTIFICATION":
      return action.payload;
    default:
      return state;
  }
};

export function NotificationProvider(props) {
  const [notification, dispatchNotification] = useReducer(reducer, {});
  return (
    <myNotificationContext.Provider
      value={{ notification, dispatchNotification }}
      {...props}
    />
  );
}

export function NotificationContext() {
  const myContext = useContext(myNotificationContext);
  if (!myContext) {
    throw new Error(
      "notificationContext must be used within a NotificationProvider"
    );
  }
  return myContext;
}
