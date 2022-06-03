import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem/CardItem";

const Favourites = ({ items, onFavourite }) => {
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center ">
        <Link to="/">
          <img className="mr-20 cu-p" src="/img/back_fav.svg" />
        </Link>
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <CardItem
            key={index}
            fav={true}
            onFavourite={onFavourite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
