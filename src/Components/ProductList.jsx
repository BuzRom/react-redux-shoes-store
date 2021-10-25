import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

import "../style/index.scss";

export default function ProductList({ items }) {
  const isFetching = useSelector(({ product }) => product.isFetching);
  const searchValue = useSelector(({ search }) => search.value);

  const filtredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="content">
      {(!isFetching ? [...Array(10)] : filtredItems).map((item, index) => (
        <ProductCard key={index} loading={!isFetching} {...item} />))}
    </div>
  );
}