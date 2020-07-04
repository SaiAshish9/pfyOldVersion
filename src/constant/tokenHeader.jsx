import Cookies from "js-cookie";

export const tokenHeader = () => {
  return {
    headers: {
      token: Cookies.get("token"),
    },
  };
};
