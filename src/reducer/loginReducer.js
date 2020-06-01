export default function loginReducer(state, action) {
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
