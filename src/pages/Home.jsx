import React, { useContext } from "react";
import CardItem from "../components/CardItem/CardItem";
import Slider from "../components/Slider";
import AppContext from "../Context";

const Home = ({
  items,
  searchValue,
  onChangeInput,
  onAddToCart,
  onAddToFavourite,
}) => {
  const { isLoading } = useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <CardItem
        key={index}
        onAdd={(obj) => onAddToCart(obj)}
        onFavourite={(obj) => onAddToFavourite(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <Slider/>
      <div className="mb-40 d-flex justify-between align-center">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="searchBlock d-flex align-center">
          <img width={14.25} height={14.25} alt="" src="/img/search.svg" />
          <input
            placeholder="Поиск..."
            onChange={onChangeInput}
            value={searchValue}
          />
        </div>
      </div>
      <div className="d-flex justify-between flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
