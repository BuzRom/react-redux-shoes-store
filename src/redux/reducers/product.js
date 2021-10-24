const initState = {
  items: [],
  isFetching: false,
};

export default function product(state = initState, action) {
  if (action.type === "LOAD_PRODUCT") {
    return {
      items: action.payload,
      isFetching: true,
    };
  }

  return state;
}
