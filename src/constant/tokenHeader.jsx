import Cookies from "js-cookie";

const myToken = Cookies.get("token");
export const tokenHeader = {
  headers: {
    token: myToken,
  },
};
