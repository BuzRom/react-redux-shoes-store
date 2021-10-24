import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import LoadingItem from "./UI/LoadingItem";

import "../style/index.scss";

export default function ProductList({ items }) {
  const isFetching = useSelector(({ product }) => product.isFetching);
  const searchValue = useSelector(({ search }) => search.value);


  // const renderItems = () => {
  //   const filtredItems = items.filter(item =>
  //     item.title.toLowerCase().includes(searchValue.toLowerCase()),
  //   );
  //   return (isFetching ? [...Array(8)] : filtredItems).map(item => (
  //     <ProductCard key={item.title} {...item} />));
  // };


  return (
    <div className="content">
      {isFetching
        ? items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => <ProductCard key={item.title} {...item} />)
        : Array(10).fill(<LoadingItem />)}
    </div>
  );
}