import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductCard from "../Components/ProductCard";
import Cart from "../Components/Cart";

import "../style/index.scss";

export default function Favourites() {
  const isActiveCart = useSelector(({ cart }) => cart.isActive);
  const favourite = useSelector(({ favourites }) => favourites.items);

  return (
    <div>
      {isActiveCart && <Cart />}
      <div className="content__title">
        <Link to="/">
          <button>
            <img src="img/ui/back.png" alt="back" />
          </button>
        </Link>
        <h2>My favourites</h2>
      </div>
      <div className="content">
        {favourite.length !== 0
          ?
          (favourite.map(item => <ProductCard key={item.title} {...item} />))
          :
          (<div className="empty-list">
            <span style={{fontSize: '70px'}}>&#129402;</span>
            <h3 className='empty__title'>There are no favourites :(</h3>
            <p className='empty__text'>You have not added anything to favourite</p>
            <Link to="/" className='button'>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>Return
            </Link>
          </div>
          )}
      </div>
    </div>
  );
}