import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleCart,
  removeItemFromCart,
  clearCart,
} from "../../redux/actions/cart";
import { createOrder } from "../../redux/actions/orders";

import "./Cart.scss";
import Item from "./Item/Item";

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
        </div>
        <div className="cart__list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Item key={item.title} onRemove={removeItem} {...item} />
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