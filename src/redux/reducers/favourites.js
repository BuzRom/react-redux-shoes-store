const initState = {
  items: [],
};

export default function favourites(state = initState, action) {
  if (action.type === "ADD_FAVOURITE") {
    return {
      items: [...state.items, action.payload],
    };
  } else if (action.type === "REMOVE_FAVOURITE") {
    return {
      items: state.items.filter((item) => item.title !== action.payload.title),
    };
  }
  return state;
}
