const userReducer = (state, action) => {
    switch (action.type) {
      case "MY_USER":
        return action.userData;
  
      default:
        return state;
    }
  };
  
  export { userReducer as default };