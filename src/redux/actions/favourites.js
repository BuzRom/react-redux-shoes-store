export function addFavouriteItem(item) {
  return {
    type: "ADD_FAVOURITE_ITEM",
    payload: item,
  };
}

export function removeFavouriteItem(item) {
  return {
    type: "REMOVE_FAVOURITE_ITEM",
    payload: item,
  };
}
