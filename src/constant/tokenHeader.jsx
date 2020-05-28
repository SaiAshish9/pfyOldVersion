import Cookies from "js-cookie";

const myToken = Cookies.get("token");
console.log(myToken);
export const tokenHeader = {
  headers: {
    token: myToken,
  },
};
