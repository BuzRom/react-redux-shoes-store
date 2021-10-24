const initState = {
  items: [],
  isActive: false,
};

export default function cart(state = initState, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  } else if (action.type === "TOGGLE_CART") {
    return {
      ...state,
      isActive: !state.isActive,
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      items: state.items.filter((item) => item.title !== action.payload.title),
    };
  } else if (action.type === "CLEAR_CART") {
    return {
      ...state,
      items: [],
    };
  }
  return state;
}
