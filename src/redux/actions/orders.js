export function createOrder(order) {
  return {
    type: "CREATE_ORDER",
    payload: order,
  };
}

export function removeOrderItem(item) {
  return {
    type: "REMOVE_ORDER_ITEM",
    payload: item,
  };
}
