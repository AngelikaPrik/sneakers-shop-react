import { useEffect, useState } from "react";
import CardItem from "./components/CardItem/CardItem";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6290cc69665ea71fe13af76d.mockapi.io/sneakers")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const onAddToCart = (obj) =>{
    setAddedItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer addedItems={addedItems} onClose={() => setCartOpened(false)} />}
      <Header onOpenCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex align-center">
            <img width={14.25} height={14.25} alt="" src="/img/search.svg" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, i) => (
            <CardItem
              key={i}
              title={item.title}
              price={item.price}
              image={item.imageUrl}
              onAdd={(obj) => onAddToCart(obj)}
              // onFavourite={}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
