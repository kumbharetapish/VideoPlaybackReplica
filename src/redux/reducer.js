const initialState = {
  status:
    localStorage.getItem("videoCountData") === null
      ? false
      : localStorage.getItem("videoCountData"),
  storeCounter:
    localStorage.getItem("videoCountData") === null
      ? []
      : localStorage.getItem("videoCountData").split(",")
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN_STATUS") {
    localStorage.setItem("loginStatus", !state.status);
    return { ...state, status: !state.status };
  }
  if (action.type === "INC") {
    console.log(action.id);
    const updateCounter =
      state.storeCounter.indexOf(action.val) >= 0
        ? [...state.storeCounter]
        : [...state.storeCounter, action.val];
    console.log(updateCounter);
    localStorage.setItem("videoCountData", updateCounter);
    return {
      ...state,
      storeCounter: [...updateCounter]
    };
  }

  return { ...state };
};

export default reducer;
