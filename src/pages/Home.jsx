import React from "react";
import CardItem from "../components/CardItem/CardItem";

const Home = ({
  items,
  searchValue,
  onChangeInput,
  onAddToCart,
  onFavourite,
  addedItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <CardItem
        key={index}
        onAdd={(obj) => onAddToCart(obj)}
        onFavourite={(obj) => onFavourite(obj)}
        added={addedItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
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
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
