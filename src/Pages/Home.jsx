import React, { useCallback } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Slider from "../Components/Slider";
import Search from "../Components/UI/Search";
import ProductList from "../Components/ProductList";
import Cart from "../Components/Cart";

import { addProduct } from "../redux/actions/product.js";

export default function Home() {
  const dispatch = useDispatch();
  const isActiveCart = useSelector(({ cart }) => cart.isActive);
  const product = useSelector((state) => state.product.items);

  const getProduct = useCallback(() => {
    axios
      .get("https://6174103d110a74001722324f.mockapi.io/shoes/items")
      .then(({ data }) => {
        dispatch(addProduct(data));
      });
  }, [dispatch]);

  React.useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div>
      <Slider />
      {isActiveCart && <Cart />}
      <Search />
      <ProductList items={product} />
    </div>
  );
}