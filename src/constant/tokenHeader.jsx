import Cookies from "js-cookie";

export const tokenHeader = () => {
  console.log(Cookies.get("token"));
  return {
    headers: {
      token: Cookies.get("token"),
    },
  };
};
