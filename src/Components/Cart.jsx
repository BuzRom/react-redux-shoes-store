import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleCart,
  removeItemFromCart,
  clearCart,
} from "../redux/actions/cart";
import { createOrder } from "../redux/actions/orders";
import CartItem from "./CartItem";

import "../style/Components/Cart.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart.items);

  const getCartPrice = () => {
    return cartItems
      ? cartItems.reduce((sum, obj) => (sum += obj.price), 0)
      : 0;
  };

  const closeCart = () => {
    dispatch(toggleCart());
    document.body.classList.toggle("lock");
  };

  const removeItem = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const createCartOrder = () => {
    dispatch(createOrder(cartItems));
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="cart__holder" onClick={closeCart}></div>
      <div className="cart">
        <div className="cart__title">
          <h2>Cart</h2>
          <svg onClick={closeCart}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="7.5"
              fill="white"
              stroke="#DBDBDB"
            />
            <path
              d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
              fill="#B5B5B5"
            />
          </svg>
        </div>
        <div className="cart__list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.title} onRemove={removeItem} {...item} />
            ))
          ) : (
            <div className="empty-list cart__empty">
              <img src="img/empty.png" alt="empty" />
              <h3 className='empty__title'>Cart empty</h3>
              <p className='empty__text'>Add at least one pair of shoes to place an order.</p>
              <button onClick={closeCart} className='button'>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>Return
              </button>
            </div>
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="cart__additional">
            <ul>
              <li>
                <p>Total: </p>
                <b>{getCartPrice()} $ </b>
              </li>
              <li>
                <p>Tax 5%: </p>
                <b>{Math.floor(getCartPrice() * 0.05)} $ </b>
              </li>
            </ul>
            <button onClick={createCartOrder} className='button order-btn'>To order
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        ) : (null)}
      </div>
    </div>
  );
}