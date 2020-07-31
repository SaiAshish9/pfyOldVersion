import Cookies from "js-cookie";

export const tokenHeader = () => {
  return {
    headers: {
      token: Cookies.get("token"),
      // token:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFkOTY4ZWZkNDIzMTE1Mjg5OTMzYTMiLCJyZXN1bWUiOiI1ZjFkOTY4ZWZkNDIzMTE1Mjg5OTMzYTIiLCJpYXQiOjE1OTU3NzQ2MDYsImV4cCI6MTYwNDQxNDYwNn0.4dB4EEAT4Pyj1YflHw8qvtrXEwIzE4gWe78LL4YlZfk",
    },
  };
};
