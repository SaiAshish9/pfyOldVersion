export default function loginReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      console.log("run 4", action.userToken);
      return { ...state, userToken: action.userToken };
    }
    case "REGISTRATION_NEEDED": {
      return { ...state, registrationRequired: action.registrationNeeded };
    }
    case "LOGIN_FAIL": {
      return { ...state, loginError: action.errorData };
    }
    default:
      return state;
  }
}
