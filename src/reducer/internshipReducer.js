const internshipReducer = (state, action) => {
    switch (action.type) {
      case "MY_INTERNSHIP":
        return action.internshipData;

      default:
        return state;
    }
  };
  
  export { internshipReducer as default };