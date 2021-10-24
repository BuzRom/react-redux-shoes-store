export function addProduct(items) {
  return {
    type: "LOAD_PRODUCT",
    payload: items,
  };
}
