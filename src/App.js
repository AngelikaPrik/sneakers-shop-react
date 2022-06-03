import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./components/CardItem/CardItem";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/cart");
      const favItemsResponse = await axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/favourites");
      const itemsResponse = await axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/sneakers");

      setIsLoading(false)
      
      setAddedItems(cartResponse.data)
      setFavouriteItems(favItemsResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (addedItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://6290cc69665ea71fe13af76d.mockapi.io/cart/${obj.id}`
        );
        setAddedItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://6290cc69665ea71fe13af76d.mockapi.io/cart", obj);
        setAddedItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Ошибка");
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://6290cc69665ea71fe13af76d.mockapi.io/cart/${id}`);
    setAddedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavourites = async (obj) => {
    try {
      if (favouriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://6290cc69665ea71fe13af76d.mockapi.io/favourites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://6290cc69665ea71fe13af76d.mockapi.io/favourites",
          obj
        );
        setFavouriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки");
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          addedItems={addedItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
        />
      )}
      <Header onOpenCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              addedItems={addedItems}
              searchValue={searchValue}
              onChangeInput={onChangeInput}
              onAddToCart={onAddToCart}
              onFavourite={onAddToFavourites}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              items={favouriteItems}
              onFavourite={onAddToFavourites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
