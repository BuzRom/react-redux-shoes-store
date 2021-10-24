import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./style/index.scss";
import Favourites from "./Pages/Favourites";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Header from "./Components/Header.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/favourites" component={Favourites}></Route>
          <Route exact path="/orders" component={Orders}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}