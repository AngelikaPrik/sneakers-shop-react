import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem/CardItem";
import AppContext from "../Context";

const Favourites = () => {
  const {favouriteItems, onAddToFavourite, isLoading} = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center ">
        <Link to="/">
          <img className="mr-20 cu-p" src={process.env.PUBLIC_URL+"img/back_fav.svg"} alt=""/>
        </Link>
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        { (isLoading ? [...Array(12)] : 
          favouriteItems).map((item, index) => (
          <CardItem
            key={index}
            fav={true}
            onFavourite={onAddToFavourite}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
