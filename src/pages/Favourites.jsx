import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem/CardItem";
import Info from "../components/Info";
import AppContext from "../Context";

const Favourites = () => {
  const { favouriteItems, onAddToFavourite, isLoading } =
    useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center ">
        <Link to="/">
          <img
            className="mr-20 cu-p"
            src={process.env.PUBLIC_URL + "/img/back_fav.svg"}
            alt=""
          />
        </Link>
        <h1>Мои закладки</h1>
      </div>
      <div className={favouriteItems.length > 0 ? "d-flex flex-wrap" : "d-flex flex-wrap justify-center"}>
        {favouriteItems.length > 0 ? (
          <>
            {favouriteItems.map(
              (item, index) => (
                <CardItem
                  key={index}
                  fav={true}
                  onFavourite={onAddToFavourite}
                  loading={isLoading}
                  {...item}
                />
              )
            )}
          </>
        ) : (
          <Info
            image="/img/emoji-favourite.png"
            w={70}
            title="Закладок нет :("
            description="Вы ничего не добавляли в закладки"
          />
        )}
      </div>
    </div>
  );
};

export default Favourites;
