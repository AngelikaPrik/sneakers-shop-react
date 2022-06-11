import React, { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import AppContext from "./Context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/cart" );
        const favItemsResponse = await axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/favourites" );
        const itemsResponse = await axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/sneakers" );
  
        setIsLoading(false);
        setAddedItems(cartResponse.data);
        setFavouriteItems(favItemsResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных')
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (addedItems.find((item) => Number(item.id) === Number(obj.id))) {
        setAddedItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        await axios.delete(
          `https://6290cc69665ea71fe13af76d.mockapi.io/cart/${obj.id}`
        );
      } else {
        setAddedItems((prev) => [...prev, obj]);
        await axios.post("https://6290cc69665ea71fe13af76d.mockapi.io/cart", obj);
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

  const isItemAdded = (id) => {
    return addedItems.some((obj) => Number(obj.id) === Number(id));
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (
        favouriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      ) {
        axios.delete(
          `https://6290cc69665ea71fe13af76d.mockapi.io/favourites/${obj.id}`
        );
        setFavouriteItems((prev) => prev.filter((item) => item.id !== obj.id));
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
    <AppContext.Provider
      value={{
        items,
        addedItems,
        favouriteItems,
        isLoading,
        isItemAdded,
        onAddToFavourite,
        onAddToCart,
        setCartOpened,
        setAddedItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={addedItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveFromCart}
          opened={cartOpened}
        />
        <Header onOpenCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                addedItems={addedItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInput={onChangeInput}
                onAddToCart={onAddToCart}
                onAddToFavourite={onAddToFavourite}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
