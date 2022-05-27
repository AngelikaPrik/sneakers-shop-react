import { useState } from "react";
import CardItem from "./components/CardItem/CardItem";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999", imageUrl: "/img/sneakers/1.png" },
  { title: "Мужские Кроссовки Nike Air Max 270", price: "12 999", imageUrl: "/img/sneakers/2.png" },
  { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499", imageUrl: "/img/sneakers/3.png" },
  { title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999", imageUrl: "/img/sneakers/4.png" },
];

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onOpenCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex align-center">
            <img width={14.25} height={14.25} alt="" src="/img/search.svg" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-between">
          {arr.map((item, i) => (
            <CardItem 
              key={i} 
              title={item.title} 
              price={item.price} 
              image={item.imageUrl} 
              onAddItem={() => console.log(1)} 
              // onFavourite={}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
