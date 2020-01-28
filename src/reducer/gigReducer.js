const gigReducer = (state, action) => {
  switch (action.type) {
    case "MY_GIG":
      return action.gigData;

    default:
      return state;
  }
};

export { gigReducer as default };
