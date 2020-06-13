export default function userReducer(state, action) {
  switch (action.type) {
    case "fetchUser": {
      return { ...state, user: action.userData };
    }
    default:
      return state;
  }
}
