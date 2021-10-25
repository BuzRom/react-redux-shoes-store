export function addFavourite(item) {
  return {
    type: "ADD_FAVOURITE",
    payload: item,
  };
}

export function removeFavourite(item) {
  return {
    type: "REMOVE_FAVOURITE",
    payload: item,
  };
}
