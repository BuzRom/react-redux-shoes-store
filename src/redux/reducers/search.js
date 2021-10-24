const initState = {
  value: "",
};

export default function sneakers(state = initState, action) {
  if (action.type === "SET_SEARCH_VALUE") {
    return {
      value: action.payload,
    };
  }

  return state;
}
