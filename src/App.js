import React, { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import AppContext from "./Context";
import Orders from "./pages/Orders";
import ItemDetails from "./pages/ItemDetails/ItemDetails";

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
        const [cartResponse, favItemsResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/cart"),
            axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/favourites"),
            axios.get("https://6290cc69665ea71fe13af76d.mockapi.io/sneakers"),
          ]);

        setIsLoading(false);
        setAddedItems(cartResponse.data);
        setFavouriteItems(favItemsResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    const findItems = addedItems.find(
      (item) => Number(item.parentId) === Number(obj.id)
    );
    try {
      if (findItems) {
        setAddedItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6290cc69665ea71fe13af76d.mockapi.io/cart/${findItems.id}`
        );
      } else {
        setAddedItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6290cc69665ea71fe13af76d.mockapi.io/cart",
          obj
        );
        setAddedItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка");
      console.error(error);
    }
  };

  const onRemoveFromCart = async (id) => {
    try {
      await axios.delete(
        `https://6290cc69665ea71fe13af76d.mockapi.io/cart/${id}`
      );
      setAddedItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении товаров");
      console.error(error);
    }
  };

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return addedItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (
        favouriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      ) {
        axios.delete(
          `https://6290cc69665ea71fe13af76d.mockapi.io/favourites/${obj.id}`
        );
        setFavouriteItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
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
      console.error(error);
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
                isLoading={isLoading}
                setSearchValue={setSearchValue}
                onChangeInput={onChangeInput}
                onAddToCart={onAddToCart}
                onAddToFavourite={onAddToFavourite}
              />
            }
          />
          <Route path="/sneakers/:id" element={<ItemDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
