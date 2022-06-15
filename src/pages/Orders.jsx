import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem/CardItem";
import Info from "../components/Info";
import AppContext from "../Context";

const Orders = () => {
  const { onAddToCart, onAddToFavourite } = useContext(AppContext);

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://6290cc69665ea71fe13af76d.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Не удалось получить заказы");
      }
    })();
  }, []);
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
        <h1>Мои заказы</h1>
      </div>
      <div
        className={
          orders.length > 0
            ? "d-flex flex-wrap"
            : "d-flex flex-wrap justify-center"
        }
      >
        {isLoading ? (
          [...Array(12)].map((item, index) => (
            <CardItem
              key={index}
              onFavourite={(obj) => onAddToFavourite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              loading={isLoading}
              {...item}
            />
          ))
        ) : (
          <>
            {orders.length > 0 ? (
              <>
                {orders.map((item, index) => (
                  <CardItem key={index} loading={isLoading} {...item} />
                ))}
              </>
            ) : (
              <Info
                image="/img/emoji-orders.png"
                w={70}
                title="У вас нет заказов :("
                description="Оформите хотя бы один заказ"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
